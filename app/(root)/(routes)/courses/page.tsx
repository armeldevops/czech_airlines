import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8 p-4'>
      {/* Cards row */}
      <div className='flex flex-wrap justify-center gap-8'>
        {/* Resume Card */}
        <Card className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] cursor-pointer bg-gradient-to-r from-white to-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="flex flex-col items-center justify-center h-full">
            <Image 
              alt='Resume'
              src='/Courses/Resume.png'
              width={50}
              height={50}
            />
            <p className='text-2xl font-semibold mt-1'>Resume</p>
          </CardContent>
        </Card>

        {/* Video Card */}
        <Link href='/courses/video'>
          <Card className="w-[300px] h-[300px] sm:w-[300px] md:w-[300px] lg:w-[300px] cursor-pointer bg-gradient-to-r from-white to-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <Image 
                alt='Video'
                src='/Courses/Video.png'
                width={50}
                height={50}
              />
              <p className='text-2xl font-semibold mt-1'>Video</p>
            </CardContent>
          </Card>        
        </Link>

        {/* Dictionary Card */}
        <Link href='/courses/dictionnary'>
          <Card className="w-[300px] h-[300px] sm:w-[300px] md:w-[300px] lg:w-[300px] cursor-pointer bg-gradient-to-r from-white to-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <Image 
                alt='Dictionary'
                src='/Courses/dictionary.png'
                width={50}
                height={50}
              />
              <p className='text-2xl font-semibold mt-1'>Dictionary</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Manuals Card */}
      <Link href='/courses/manuals'>
        <Card className="w-[300px] h-[300px] sm:w-full md:w-[800px] lg:w-[960px] xl:w-[960px] cursor-pointer bg-gradient-to-tr from-sky-600 to-blue-100 shadow-lg rounded-xl hover:shadow-2xl border border-none transition-all duration-300 relative overflow-hidden">
          {/* Image Moon (coin supérieur gauche) */}
          <Image 
            alt="Moon"
            src="/Manuals/Nuage.png"
            width={150}
            height={150}
            className="absolute -top-4 left-48 opacity-80"
          />
          <Image 
            alt="Moon"
            src="/Manuals/Nuage.png"
            width={250}
            height={250}
            className="absolute top-8 -left-20 opacity-80"
          />
          <Image 
            alt="Moon"
            src="/Manuals/Nuage.png"
            width={100}
            height={100}
            className="absolute top-48 left-48 opacity-80"
          />

          {/* Image Cloud (coin supérieur droit) */}
          <Image 
            alt="Cloud"
            src="/Manuals/Moon.png"
            width={200}
            height={200}
            className="absolute top-4 right-4 opacity-80"
          />
          
          <CardContent className="flex flex-col items-center justify-center h-full z-10">
            <p className='text-2xl font-semibold mt-4'>Manuals</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

export default Courses