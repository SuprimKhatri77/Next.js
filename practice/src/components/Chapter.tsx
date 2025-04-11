import React from 'react'
import { data } from '@/notesData'
import Link from 'next/link'


type ChapterType = {
    name: string;
    title: string;
    notes: string;
}

export const Chapter = ({ chapter, slugName }: { chapter: ChapterType, slugName: string }) => {

    return (
        <div className='max-w-xl mx-auto mt-5 p-4 bg-gray-800 text-gray-100 rounded'>
            <Link href="/notes/physics/class-11" className='text-blue-500 underline hover:no-underline'>
                ← Back to Class
            </Link>
            <h1 className='text-2xl font-bold mb-2'>{chapter.title}</h1>
            <p className='text-gray-300 mb-4'>Chapter Name: {chapter.name}</p>
            <p>{chapter.notes}</p>
        </div>
    )
}
