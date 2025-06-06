import { Paper } from '@/papersData'
import React from 'react'
import Link from 'next/link'

export const Class = ({ subjectData, slug }: { subjectData: Paper, slug: string }) => {
    const classData = subjectData.classes.find((cls) => cls.name === slug)
    if (!classData) {
        throw new Error("class not found!")
    }
    console.log(classData);


    return (
        <div className='flex flex-wrap gap-5'>
            {classData.papers.map((paper) => (
                <Link href={`/papers/${subjectData.subject}/${classData.name}/pyq-${paper.year}`} key={paper.id}
                    className='bg-slate-700 w-fit py-3 px-5 rounded-md cursor-pointer mx-auto flex flex-col justify-center items-center gap-5'>
                    <p> {paper.paperTitle} - {paper.year} </p>

                </Link>
            ))}

        </div>
    )
}
