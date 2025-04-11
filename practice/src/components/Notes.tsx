import React from 'react'
import { data } from '@/notesData'
import Link from 'next/link'

export const Notes = ({ notes }: { notes: data[] }) => {
    return (
        <div className=' flex justify-center items-center gap-5 max-w-[400px] mx-auto rounded-md mt-5'>
            {
                notes.map((note) => (
                    <Link href={`/notes/${note.subject}`} key={note.subject} className='bg-gray-600 text-gray-200'>
                        <p> {note.subject} </p>
                    </Link>
                ))
            }
        </div>
    )
}
