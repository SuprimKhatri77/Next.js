import React from 'react'
import { Paper } from '@/papersData';
import Link from 'next/link';




export const Subject = ({ subjectData }: { subjectData: Paper }) => {
    console.log(subjectData);

    return (
        <div className='flex  gap-5 flex-col'>
            {subjectData.classes.map((cls) => (
                <Link href={`/papers/${subjectData.subject}/${cls.name}`}
                    key={cls.name}
                    className='bg-slate-700 w-fit py-3 px-5 rounded-md cursor-pointer mx-auto flex flex-col justify-center items-center gap-5'>
                    <p> {cls.name} </p>

                </Link>
            ))}
        </div>
    )
}
