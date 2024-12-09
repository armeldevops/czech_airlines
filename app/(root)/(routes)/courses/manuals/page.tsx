import SearchBar from '@/components/SearcBar'
import { SelectVideo } from '@/components/Select'
import { Button } from '@/components/ui/button'
import { Lessons } from '@/lib/lesson'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LessonCard from '../_components/LessonCard'


const Page = () => {
  return (
    <div className='max-w-7xl mx-auto p-7 space-y-8'>
      <Button variant='ghost' className='hover:bg-transparent'>
        <Link href='/courses' className='flex flex-row items-center gap-1'>
          <ChevronLeft className='w-6 h-6' />
          <span className='text-2xl'>Manuals</span>
        </Link>
      </Button>

      <div className='flex flex-row items-center justify-end gap-6 p-3'>
        <SearchBar />
        <SelectVideo />
      </div>

      <div className='p-5'>
        <span className='text-2xl ml-2'>Chapter 1 : Basics</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson) => (
            <Link key={lesson.id} href={`/courses/manuals/${lesson.id}`}>
              <LessonCard lessonId={lesson.id} />
            </Link>
          ))}
        </div>
      </div>

      <div className='p-5'>
        <span className='text-2xl ml-2'>Chapter 2 : Fly or Fly</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson) => (
            <Link key={lesson.id} href={`/courses/manuals/${lesson.id}`}>
              <LessonCard lessonId={lesson.id} />
            </Link>
          ))}
        </div>
      </div>

      <div className='p-5'>
        <span className='text-2xl ml-2'>Chapter 3 : Errors</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson) => (
            <Link key={lesson.id} href={`/courses/manuals/${lesson.id}`}>
              <LessonCard lessonId={lesson.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page