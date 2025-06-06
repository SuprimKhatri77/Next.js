import React from 'react'
import { Paper } from '@/papersData'

export const QuestionPaper = ({ subjectData, slug }: { subjectData: Paper, slug: string }) => {

    const classData = subjectData.classes.find((cls) => cls.name === slug)
    return (
        <div className='flex gap-5 flex-wrap'>
            {classData?.papers.map((paper) => (
                <div key={paper.id}
                    className='bg-slate-700 w-fit py-3 px-5 rounded-md cursor-pointer mx-auto flex flex-col justify-center items-center gap-5'>
                    <p> {paper.paperTitle} - {paper.year} </p>

                    <p> {paper.link} </p>

                </div>
            ))}
        </div>
    )
}
