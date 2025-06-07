"use server";

import { error } from "console";
import { z } from "zod";
import { db } from "../lib/db";
import { snippetTable } from "../lib/db/schema";
import { revalidatePath } from "next/cache";

export type FormState = {
  errors?: {
    title?: string[];
    code?: string[];
  };
  message?: string | null;
  success?: boolean;
};

const SnippetSchema = z.object({
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
