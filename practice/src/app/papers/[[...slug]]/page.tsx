import { Class } from "@/components/Papers/Class";
import { Papers } from "@/components/Papers/Papers";
import { QuestionPaper } from "@/components/Papers/QuestionPaper";
import { Subject } from "@/components/Papers/Subject";
import { Paper, papersData } from "@/papersData";
import Link from "next/link";


export default function PapersPage({ params }: { params: { slug: string[] } }) {
    const slug = params.slug ?? []

    if (slug.length === 0) {
        return <Papers papersData={papersData} />
    }
    if (slug.length === 1) {
        const subjectData = papersData.find((paper) => paper.subject === slug[0])
        if (!subjectData) {
            throw new Error("subject not found!")
        }
        return <Subject subjectData={subjectData} />
    }

    if (slug.length === 2) {
        const subjectData = papersData.find((paper) => paper.subject === slug[0])
        if (!subjectData) {
            throw new Error("subject not found!")
        }

        return <Class subjectData={subjectData} slug={slug[1]} />
    }

    if (slug.length === 3) {

        const subjectData = papersData.find((paper) => paper.subject === slug[0])
        if (!subjectData) {
            throw new Error("subject not found!")
        }

        return <QuestionPaper subjectData={subjectData} slug={slug[1]} />
    }

    return (
        <div>
            oops! looks like the thing u wanted is not here.
            go back to <Link href="/papers" className="text-blue-500 underline hover:no-underline">papers page</Link>
        </div>
    )
}