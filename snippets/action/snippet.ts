"use server";

import { z } from "zod";
import { db } from "../lib/db";
import { snippetTable } from "../lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export type FormState = {
  errors?: {
    title?: string[];
    code?: string[];
  };
  message?: string | null;
  success?: boolean;
};

const SnippetSchema = z.object({
  snippetId: z.string().optional(),
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title cannot exceed more than 255 words"),
  code: z.string().min(1, "Snippet code is necessary"),
});

export async function addSnippet(prevState: FormState, formData: FormData) {
  const validateFields = SnippetSchema.safeParse({
    title: formData.get("title"),
    code: formData.get("code"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Invalid field data",
    };
  }

  const { title, code } = validateFields.data;

  try {
    await db.insert(snippetTable).values({
      title,
      code,
    });
    revalidatePath("/");
    return {
      message: "Snippet created successfully!",
      success: true,
    };
  } catch (error) {
    console.error("Error creating snippet: ", error);
    return {
      errors: {},
      message: "Failed to create snippet",
    };
  }
}

export async function editSnippet(prevState: FormState, formData: FormData) {
  const snippetId = formData.get("snippetId") as string;
  const validateFields = SnippetSchema.safeParse({
    title: formData.get("title"),
    code: formData.get("code"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Invalid form data!",
    };
  }

  const { title, code } = validateFields.data;

  try {
    await db
      .update(snippetTable)
      .set({ title, code, updatedAt: new Date() })
      .where(eq(snippetTable.snippetId, snippetId));
    return {
      message: "Snippet updated successfully!",
      success: true,
    };
  } catch (error) {
    console.error("Error updating snippet: ", error);
    return {
      errors: {},
      message: "Failed to update the snippet!",
      succes: false,
    };
  }
}

export async function deleteSnippet(snippetId: string) {
  try {
    await db.delete(snippetTable).where(eq(snippetTable.snippetId, snippetId));
    return {
      success: true,
      message: "Snippet deleted successfully!",
    };
  } catch (error) {
    console.error("Error deleting snippet: ", error);
    return {
      errors: {},
      success: false,
      message: "Failed to delete snippet!",
    };
  }
}
