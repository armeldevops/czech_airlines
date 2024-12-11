'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Filters from '../_components/Filters'
import { Button } from '@/components/ui/button'
import { SelectExam } from '../_components/SelectedExam'

const ExamenPage = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null); // Typage correct pour TypeScript
  const router = useRouter(); // Hook useRouter pour la navigation

  const examDetails: Record<string, { id: number; questions: number; duration: string }> = {
    radio: { id: 1, questions: 66, duration: '90 Minutes' },
    air: { id: 2, questions: 44, duration: '75 Minutes' },
    meterlogy: { id: 3, questions: 84, duration: '120 Minutes' },
    operation: { id: 4, questions: 42, duration: '75 Minutes' },
    communication: { id: 5, questions: 34, duration: '60 Minutes' },
  };

  const handleStartClick = () => {
    if (selectedExam) {
      const examId = examDetails[selectedExam]?.id;
      if (examId) {
        router.push(`/questions-bank/exam/${examId}`); // Redirection dynamique
      }
    }
  };

  return (
    <div className="min-h-screen max-w-[1350px] mx-auto p-7">
      <Button variant="ghost" className="hover:bg-transparent">
        <Link href="/questions-bank" className="flex flex-row items-center gap-1">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-2xl">Exam</span>
        </Link>
      </Button>

      <Filters />

      <div className="flex items-center justify-center">
        <SelectExam onChange={(value: string) => setSelectedExam(value)} />
      </div>

      {selectedExam && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium">
            Number of Questions in the exam: {examDetails[selectedExam]?.questions}
          </p>
          <p className="text-lg font-medium">
            Exam duration: {examDetails[selectedExam]?.duration}
          </p>
          <Button
            onClick={handleStartClick} // Appel à la fonction de redirection
            className="mt-4 bg-[#EECE84] text-black rounded-full hover:bg-[#EECE84]/80"
          >
            <span className="px-6">Start</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExamenPage;