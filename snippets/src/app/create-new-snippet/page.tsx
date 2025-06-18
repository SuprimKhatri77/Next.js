"use client"

import { useActionState, useEffect, useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { addSnippet, type FormState } from "../../../action/snippet"
import { UploadButton } from "@/utils/uploadthing"

export default function CreateNewSnippet() {
    const initialState: FormState = { errors: {} }
    const [uploadedFileUrl, setUploadedFileUrl] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)
    const [state, formAction, isPending] = useActionState<FormState, FormData>(
        addSnippet,
        initialState
    )
    const lastSuccessRef = useRef<string | null>(null)

    useEffect(() => {
        if (state.success && state.message) {
            const currentSuccess = `${Date.now()}-${state.message}`

            if (currentSuccess !== lastSuccessRef.current) {
                lastSuccessRef.current = currentSuccess

                setSuccessMessage(state.message)
                setShowSuccess(true)

                const timer = setTimeout(() => {
                    setShowSuccess(false)
                    setTimeout(() => setSuccessMessage(""), 300)
                }, 3000)

                return () => clearTimeout(timer)
            }
        }
    }, [state.success, state.message, state])

    return (
        <div className="relative">
            <form
                action={formAction}
                className="max-w-xl mx-auto border min-h-content flex flex-col gap-5 my-5 p-7 rounded-xl"
            >
                <h1 className="text-4xl font-bold text-center">Snippet Form</h1>

                {/* Title */}
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-5 items-center">
                        <label htmlFor="title" className="text-xl font-medium">
                            Title:
                        </label>
                        <Input type="text" id="title" name="title" placeholder="Snippet title" />
                    </div>
                    {state.errors?.title && (
                        <p className="text-sm text-red-400 text-left pl-18">{state.errors.title}</p>
                    )}
                </div>

                {/* Code */}
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-5 items-center">
                        <label htmlFor="code" className="text-xl font-medium">
                            Code:
                        </label>
                        <Textarea id="code" name="code" placeholder="Your snippet code" />
                    </div>
                    {state.errors?.code && (
                        <p className="text-sm text-red-400 text-left pl-18">{state.errors.code}</p>
                    )}
                </div>

                {/* Upload Button */}
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-medium">Image:</label>
                    <div onClick={(e) => e.stopPropagation()}>
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                const url = res[0]?.ufsUrl ?? ""
                                // const url = `https://ne9n0za5cn.ufs.sh/${key}`
                                setUploadedFileUrl(url)
                                alert("Upload Completed")
                            }}
                            onUploadError={(error: Error) => {
                                alert(`ERROR! ${error.message}`)
                            }}
                            appearance={{
                                button:
                                    "bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200",
                                container: "flex items-center gap-2",
                            }}
                        />
                    </div>

                    {/* Hidden input for uploaded URL */}
                    <input type="hidden" name="imageUrl" value={uploadedFileUrl} />
                </div>

                {/* Submit Button */}
                <Button className="cursor-pointer" type="submit" disabled={isPending}>
                    {!isPending ? "Create" : "Creating..."}
                </Button>
            </form>

            {/* Success Toast */}
            <div className="fixed top-4 right-4 z-50">
                <div
                    className={`
            bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg
            transform transition-all duration-500 ease-in-out
            ${showSuccess ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"}
          `}
                >
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {successMessage}
                    </div>
                </div>
            </div>
        </div>
    )
}
