import { data } from '@/notesData'
import Link from 'next/link';
import React from 'react'
type classes = {
    chapters: {
        name: string;
        title: string;
    }[]
}

export const Class = ({ subject, slugName }: { subject: data, slugName: string }) => {
    const stdClass = subject.classes.find((cls) => cls.name === slugName)
    console.log(stdClass);
    return (
        <div className=' flex justify-center items-center gap-5 min-w-[400px] mx-auto rounded-md mt-5'>


            {
                stdClass?.chapters.map((chap) => (
                    <Link href={`/notes/${subject.subject}/${stdClass.name}/${chap.name}`} key={chap.name} className='bg-gray-600 text-gray-200 p-2 rounded'>
                        {chap.name} - {chap.title}
                    </Link>
                ))
            }

        </div>
    )
}
