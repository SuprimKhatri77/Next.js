import { notFound } from "next/navigation";
import Link from "next/link";
import { notesData } from "@/notesData";
import { Notes } from "@/components/Notes";
import { Subject } from "@/components/Subject";
import { Class } from "@/components/Class";
import { Chapter } from "@/components/Chapter";


interface Params {
    slug?: string[]
}

export default async function NotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params

    if (slug.length === 0) {
        return <Notes notes={notesData} />
    }


    if (slug.length === 1) {
        return <Subject notes={notesData} slugName={slug[0]} />
    }

    if (slug.length === 2) {
        const subject = notesData.find((note) => note.subject === slug[0])
        if (!subject) throw new Error("no subject found")
        // const stdClass = subject.classes.find((cls) => cls.name === slug[1])
        // console.log(stdClass);

        return (
            <Class subject={subject} slugName={slug[1]} />
        )
    }
    if (slug.length === 3) {
        const subject = notesData.find((note) => note.subject === slug[0])
        if (!subject) throw new Error("no subject found")
        const stdClass = subject.classes.find((cls) => cls.name === slug[1])
        if (!stdClass) throw new Error("no class found")
        const chapter = stdClass.chapters.find((chap) => chap.name === slug[2])
        if (!chapter) throw new Error("no chapters found")
        return (
            <Chapter chapter={chapter} slugName={slug[2]} />
        )
    }


    return (
        <div>
            oops! looks like the thing u wanted is not here.
            go back to <Link href="/notes" className="text-blue-500 underline hover:no-underline">notes page</Link>
        </div>
    )


}