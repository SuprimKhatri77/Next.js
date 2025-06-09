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
    const [showDeleteMessage, setShowDeleteMessage] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState("")

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



    const handleDelete = async () => {
        setShowLoader(true)
        try {
            await deleteSnippet(snippet.snippetId)
            setShowDeleteMessage(true)
            setDeleteMessage("Snippet deleted successfully!")

            await delay(2000)

            setShowDeleteMessage(false)
            router.replace("/")

            await delay(1000)
            setShowLoader(false)
            setShowDeleteMessage(false)

        } catch (error) {
            console.error("Error deleteing the snippet: ", error)
            setShowLoader(false)
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
                                <Button className="cursor-pointer"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    Cancel
                                </Button>
                                <Button className="cursor-pointer flex items-center justify-center" variant="destructive"
                                    onClick={handleDelete}
                                    disabled={showLoader}
                                >
                                    <span className="pt-1 text-center">Delete</span>


                                    <div className={`relative ${showLoader ? "block" : "hidden"} items-center  max-w-sm p-6  bg-transparent rounded-lg`}>

                                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-[20%]">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>

                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {showDeleteMessage && (

                    <div className="fixed top-4 right-4 z-50">
                        <div
                            className={`
            bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg
            transform transition-all duration-500 ease-in-out
            ${showDeleteMessage ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"}
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
                                {deleteMessage}
                            </div>
                        </div>
                    </div>
                )}

            </div >
        </>
    )
}