import { eq } from "drizzle-orm"
import { db } from "../../../../lib/db"
import { snippetTable, SnippetType } from "../../../../lib/db/schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default async function SnippetDetailPage({ params }: { params: { snippetId: string } }) {
    const { snippetId } = await params
    const [snippet] = await db.select().from(snippetTable).where(eq(snippetTable.snippetId, snippetId)).limit(1)


    if (!snippet) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h1 className="text-5xl font-bold">
                    Snippet of id {snippetId} not found!
                </h1>
            </div>
        )
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
            </div>
        </>
    )
}