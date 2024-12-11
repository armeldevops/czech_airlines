import { Button } from '@/components/ui/button';
import { Circle, Eye, EyeClosed, Flag, RotateCw, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SelectedLastExams } from './SelectedLastExams';

const Filters = () => {
  return (
    <div className='p-6 flex flex-col space-y-8'>
      <div className=''>
        <span className="text-2xl font-semibold">Filters</span>
      </div>
      <div className="p-4 border-2 border-dashed border-black/80 rounded-3xl">
        <div className="flex flex-col ml-1.5 mt-3 mb-3">
          <div className="flex flex-row gap-4 space-x-4 items-center justify-center">
            {/* Examining Authorities */}
            <div className="bg-gradient-to-tr from-sky-600 to-blue-100 rounded-3xl h-28 w-full relative overflow-hidden">
              <Image 
                alt="Moon"
                src="/Manuals/Nuage.png"
                width={150}
                height={150}
                className="absolute -top-20 -left-20 opacity-80"
              />
              <div className='flex flex-row items-center gap-1 p-6 ml-'>
                <div className='border-none bg-[#EECE84]/50 rounded-full p-2'>
                  <Flag className='w-4 h-4 fill-yellow-400 text-yellow-400 mt-0.5 ml-0.5 ' />
                </div>
                <div className='flex flex-col'>
                  <span className=''>Examinating authorities</span>
                  <span className='text-2xl font-semibold'>All Examinating Authorities</span>
                </div>
              </div>
              <Link href='/account/subscribe'>
                <Button className="absolute bottom-10 right-10 rounded-full flex items-center border border-primary/50 bg-transparent text-black/70 hover:bg-transparent hover:opacity-80">
                  <span>Change</span>
                </Button>
              </Link>
            </div>

            {/* Filter Tags */}
            <div className="flex gap-4 flex-wrap">
              <div className='flex flex-row gap-2'>
                <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-[#EECE84] rounded-3xl">
                  <Eye className='w-4 h-4' />
                  Seen in exam
                </button>
                <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-white rounded-3xl">
                  <Circle className='w-4 h-4 text-green-600' />
                  Green tag
                </button>
                <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-white rounded-3xl">
                  <Circle className='w-4 h-4 text-red-600' />
                  Red tag
                </button>
                <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-[#EECE84] rounded-3xl">
                  <Circle className='w-4 h-4' />
                  Orange tag
                </button>
              </div>
              <div className='flex flex-row gap-2'>
                <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-white rounded-3xl">
                    <EyeClosed className='w-4 h-4 text-[#EECE84]' />
                    I’ve never seen
                  </button>
                  <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-white rounded-3xl">
                    <X className='w-4 h-4 text-red-600' />
                    I answered wrong
                  </button>
                  <SelectedLastExams />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-4'>
        <button className="flex flex-row items-center gap-1.5 py-2 px-4 bg-white rounded-3xl">
          <RotateCw className='w-4 h-4 text-[#EECE84]' />
          Clear fealter
        </button>
      </div>
    </div>
    
  );
};

export default Filters;
