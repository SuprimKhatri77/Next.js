import { eq } from "drizzle-orm"
import { db } from "../../../../lib/db"
import { snippetTable, SnippetType } from "../../../../lib/db/schema"
import SnippetPage from "./SnippetDetailPage"



export default async function SnippetDetailPage({ params }: { params: { snippetId: string } }) {
    const { snippetId } = await params
    const [snippet] = await db.select().from(snippetTable).where(eq(snippetTable.snippetId, snippetId)).limit(1)


    if (!snippet || !snippetId) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h1 className="text-5xl font-bold">
                    Snippet of id {snippetId} not found!
                </h1>
            </div>
        )
    }


    return <SnippetPage snippet={snippet} />
}
