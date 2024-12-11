'use client'

import { SliderAirlines } from "@/components/Sliders";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lesson, Lessons } from "@/lib/lesson";
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Fonction pour récupérer une leçon par son ID
const getLessonById = (id: string): Lesson | undefined => {
  return Lessons.find(lesson => lesson.id === id);
};

const LessonCard = ({ lessonId }: { lessonId: string }) => {
  const lesson = getLessonById(lessonId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!lesson) {
    return <div>Leçon non trouvée</div>;
  }

  // Ouvrir la modal
  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();  // Empêche la redirection
    e.stopPropagation(); // Empêche la propagation du clic vers le Link
    setIsModalOpen(true);
  };

  // Fermer la modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
              alt="Video"
              src="/Courses/Resume.png"
              width={50}
              height={50}
              className="cursor-pointer"
              onClick={handleImageClick} // Ouvre la modal sans rediriger
            />
          </div>
          <div className="w-full mt-4 flex flex-col justify-between items-end gap-2">
            <span className="items-end text-gray-500">{lesson.progress}%</span>
            <SliderAirlines />
          </div>
        </CardContent>
        <CardFooter className='bg-[#EECE843D] rounded-b-2xl'>
          <span className="text-sm my-6 mb-0 flex gap-1"> 
            <User className='w-4 h-4' /> 
            {lesson.owner}
          </span>
        </CardFooter>
      </Card>

      {/* Modal pour afficher la vidéo de la leçon */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-semibold">Regarder la vidéo</h2>
            
            {/* Iframe pour afficher la vidéo YouTube */}
            <div className="mb-4">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${lesson.urlVideo.split('v=')[1]}`} // Extraire l'ID de la vidéo
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-4 bg-[#EECE84] text-white p-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonCard;