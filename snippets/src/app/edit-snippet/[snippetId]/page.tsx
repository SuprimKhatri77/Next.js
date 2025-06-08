import { eq } from "drizzle-orm"
import { db } from "../../../../lib/db"
import { snippetTable } from "../../../../lib/db/schema"
import EditForm from "../EditForm"

export default async function EditSnippet({ params }: { params: { snippetId: string } }) {
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

    return <EditForm snippet={snippet} />
}