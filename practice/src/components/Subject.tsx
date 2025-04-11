import { data } from '@/notesData'
import React from 'react'
import Link from 'next/link'

export const Subject = ({ notes, slugName }: { notes: data[], slugName: string }) => {
    const subject = notes.find((note) => note.subject === slugName)
    // console.log(subject);

    if (!subject) return <p>No subject found</p>


    return (
        <div className=' flex justify-center items-center gap-5 max-w-[400px] mx-auto rounded-md mt-5'>

            {subject.classes.map((cls) => (
                <Link
                    href={`/notes/${subject.subject}/${cls.name}`}
                    key={cls.name}
                    className='bg-gray-600 text-gray-200 p-2 rounded'
                >
                    {cls.name}



                </Link>
            ))}

        </div>
    )
}
