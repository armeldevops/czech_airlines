'use client'

import { useState } from 'react';
import { SliderAirlines } from "@/components/Sliders";
import { Button } from "@/components/ui/button";
import { Lessons } from "@/lib/lesson";
import { ChartNoAxesColumn, ChevronLeft, TimerIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const LessonDetailPage = ({ params }: Props) => {
  const lesson = Lessons.find((lesson) => lesson.id === params.id);
  const [isModalOpen, setIsModalOpen] = useState(false); // Gérer l'état de la modal

  if (!lesson) {
    return <div>Leçon non trouvée</div>;
  }

  const handleImageClick = () => {
    setIsModalOpen(true); // Ouvre la modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Ferme la modal
  };

  return (
    <div className="max-w-7xl mx-auto p-7 space-y-8">
      <Button variant='ghost' className='hover:bg-transparent'>
        <Link href='/courses/video' className='flex flex-row items-center gap-1'>
          <ChevronLeft className='w-6 h-6' />
          <span className='text-2xl'>Videos</span>
        </Link>
      </Button>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">{lesson.stage}</span>
          <span className="text-2xl">{lesson.title}</span>
          <span className="text-2xl flex flex-row items-center gap-1">
            <User />
            {lesson.owner}
          </span>
        </div>
        <div className="items-end cursor-pointer" onClick={handleImageClick}>
          <Image
            alt='Video'
            src='/Courses/Resume.png'
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="w-full mt-4 flex flex-col justify-between items-end gap-2">
        <span className='items-end text-gray-500'>{lesson.progress}%</span>
        <SliderAirlines />
      </div>
      <div className="flex gap-2">
        <Button className="bg-yellow-600 rounded-full text-white hover:bg-yellow-600/80 hover:text-white">
          <ChartNoAxesColumn />
          {lesson.level}
        </Button>
        <Button className="bg-yellow-600 rounded-full text-white hover:bg-yellow-600/80 hover:text-white">
          <TimerIcon />
          {lesson.durations}
        </Button>
      </div>
      <div>
        <span>Description</span>
        <span>{lesson.description}</span>
      </div>

      {/* Modal pour afficher la vidéo de la leçon */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-semibold">Regarder la vidéo</h2>
            
            {/* Lecteur YouTube intégré avec iframe */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${new URL(lesson.urlVideo).searchParams.get("v")}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-4 bg-yellow-500 text-white p-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDetailPage;