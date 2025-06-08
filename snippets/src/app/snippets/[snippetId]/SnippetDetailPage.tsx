"use client"


import { snippetTable, SnippetType } from "../../../../lib/db/schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { deleteSnippet } from "../../../../action/snippet"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function SnippetPage({ snippet }: { snippet: SnippetType }) {
    const router = useRouter()
    const [showDeleteModal, setShowDeleteModal] = useState(false)


    const handleDelete = async () => {
        try {
            await deleteSnippet(snippet.snippetId)
            router.replace("/")
        } catch (error) {
            console.error("Error deleteing the snippet: ", error)
        }
    }
    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
                <Link href="/" className="self-start mx-[30%]">
                    <Button className="cursor-pointer">
                        Back to home
                    </Button>
                </Link>
                <h1 className="text-pink-700 font-bold text-4xl">Snippet Detail Page</h1>
                <div className="bg-black rounded-lg py-5 px-4 text-white cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out hover:-translate-2.5 hover:shadow-xl">
                    <h1 className="font-bold capitalize">{snippet.title}</h1>
                    <p className="pl-4">{snippet.code}</p>
                </div>
                <div className="flex gap-5 items-center">
                    <Link href={`/edit-snippet/${snippet.snippetId}`}>
                        <Button variant="outline" className="cursor-pointer">Edit</Button>
                    </Link>
                    <Button variant="destructive" className="cursor-pointer"
                        onClick={() => setShowDeleteModal(true)}
                    >Delete</Button>
                </div>

                {showDeleteModal && (
                    <div className="absolute w-full h-full flex items-center justify-center z-50 bg-transparent transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-5 py-10 px-7 shadow-2xl z-50 bg-white shadow-black/70 rounded-xl ">
                            <p>Are you sure you want to delete this snippet?</p>
                            <div className="flex justify-between">
                                <Link href={`/snippets/${snippet.snippetId}`}>
                                    <Button className="cursor-pointer"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                                <Button className="cursor-pointer" variant="destructive"
                                    onClick={handleDelete}
                                >Delete</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}