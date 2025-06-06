import React from 'react'
import { Paper } from '@/papersData'
import Link from 'next/link'




export const Papers = ({ papersData }: { papersData: Paper[] }) => {
    return (
        <div className='flex  gap-1'>
            {papersData.map((paper) => (
                <Link href={`/papers/${paper.subject}`} key={paper.subject} className='bg-slate-700 w-fit py-3 px-5 rounded-md cursor-pointer mx-auto flex flex-col justify-center items-center gap-5'>
                    <p className='text-xl font-bold '> {paper.subject} </p>

                </Link>
            ))}
        </div>
    )
}
