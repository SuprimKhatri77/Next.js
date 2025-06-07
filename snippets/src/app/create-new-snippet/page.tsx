"use client"

import { useActionState } from "react";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { addSnippet, FormState } from "../../../action/snippet";


export default function CreateNewSnippet() {
    const initialState: FormState = {
        errors: {}
    }
    const [state, formAction, isPending] = useActionState<FormState, FormData>(addSnippet, initialState)
    return (
        <form action={formAction} className="max-w-xl mx-auto border min-h-content flex flex-col gap-5 my-5 p-7 rounded-xl">
            <h1 className="text-4xl font-bold text-center">Snippet Form</h1>
            <div className="flex flex-col  justify-center gap-2">
                <div className="flex gap-5 items-center">

                    <label htmlFor="title" className="text-xl font-medium">Title:</label>
                    <Input type="text" id="title" name="title" placeholder="snippet title" />
                </div>
                {state.errors?.title && (
                    <p className="text-sm text-red-400 text-left pl-18">{state.errors.title}</p>
                )}
            </div>
            <div className="flex flex-col justify-center gap-2">

                <div className="flex gap-5 items-center">
                    <label htmlFor="code" className="text-xl font-medium">Code:</label>
                    <Textarea id="code" name="code" placeholder="your snippet code" />
                </div>
                {state.errors?.code && (
                    <p className="text-sm text-red-400 text-left pl-18">{state.errors.code}</p>
                )}
            </div>

            <Button className="cursor-pointer" type="submit"
                disabled={isPending}
            >
                {
                    !isPending ? "Create" : "Creating......"
                }
            </Button>
            {state.success && (
                <div className="absolute bottom-20 right-10">
                    <p className={`bg-purple-500 py-4 px-7 rounded-xl text-white text-lg ${state.success ? "translate-x-0" : "translate-x-full"}transition-all duration-300 ease-in-out`}>{state.message}</p>
                </div>
            )}

        </form>
    )
}