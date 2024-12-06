import SearchBar from '@/components/SearcBar'
import { SelectVideo } from '@/components/Select'
import { Button } from '@/components/ui/button'
import { Lessons, Lesson } from '@/lib/lesson'
import { ChevronLeft, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // Importation des composants de Card
import Image from 'next/image'
import { SliderAirlines } from '@/components/Sliders'

// Composant pour afficher chaque leçon avec le cadre
const LessonCard = ({ lesson }: { lesson: Lesson }) => (
  <Card className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
    <CardHeader className='flex flex-row justify-between items-center'>
      <CardTitle className="text-xl font-semibold">{lesson.stage}</CardTitle>
      <CardTitle className="text-sm font-semibold text-gray-500">{lesson.type}</CardTitle>
      <CardTitle className="text-sm font-semibold text-gray-500">{lesson.createdAt}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{lesson.description}</span>
        <Image 
          alt='Video'
          src='/Courses/Resume.png'
          width={50}
          height={50}
        />
      </div>
      <div className="w-full mt-4 flex flex-col justify-between items-end gap-2">
        <span className='items-end text-gray-500'>{lesson.progress}%</span>
        <SliderAirlines />
      </div>
    </CardContent>
    <CardFooter className='bg-yellow-600/20 rounded-b-2xl'>
      <span className="text-sm my-6 mb-0 flex gap-1"> 
        <User className='w-4 h-4' /> 
        {lesson.owner}
      </span>
    </CardFooter>
  </Card>
);


const Page = () => {
  return (
    <div className='max-w-7xl mx-auto p-7 space-y-8'>
      <Button variant='ghost' className='hover:bg-transparent hover:border border-foreground/5'>
        <Link href='/courses/create' className='flex flex-row items-center gap-1'>
          <ChevronLeft className='w-6 h-6' />
          <span className='text-xl'>Videos</span>
        </Link>
      </Button>

      <div className='flex flex-row items-center justify-end gap-6'>
        <SearchBar />
        <SelectVideo />
      </div>

      <div>
        <span className='text-2xl ml-2'>Chapter 1 : Basics</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </div>

      <div>
        <span className='text-2xl ml-2'>Chapter 2 : Fly or Fly</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </div>

      <div>
        <span className='text-2xl ml-2'>Chapter 3 : Errors</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page