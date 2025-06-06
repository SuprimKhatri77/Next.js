import { NextResponse } from "next/server";

let notes = [
  { id: 1, title: "First note" },
  { id: 2, title: "Second note" },
  { id: 3, title: "Third note" },
];

export async function GET(request: Request) {
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  try {
    const note = await request.json();
    const newNote = {
      id: notes.length + 1,
      title: note.title,
    };

    notes.push(newNote);
    return new Response(JSON.stringify(newNote), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error("error in POST request:", error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
