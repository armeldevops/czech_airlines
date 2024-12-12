'use client'

import { Power } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { SelectedValidation } from '../../../_components/SelectedValidation';

const Validation = () => {
  const router = useRouter();
  const params = useParams();
  const currentExamId = params?.id;
  
  const corrections = [
    { id: 1, status: "Good answer" },
    { id: 2, status: "Good answer" },
    { id: 3, status: "Wrong answer" },
    { id: 4, status: "Wrong answer" },
  ];

  const handleExitExam = () => {
    router.push('/questions-bank/study'); // Redirige vers la page des examens
  };

  const handleExitReset = () => {
    if (currentExamId) {
      router.push(`/questions-bank/study/${currentExamId}`);
    } else {
      console.error('Aucun ID d\'examen sélectionné');
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-7 space-y-10">
      <div className="flex flex-row justify-between items-center">
        {/* Détails */}
        <div className="font-semibold">
          <span className="text-3xl">010 - Communications</span>
          <div className="text-xl font-normal">
            15 Questions | 08 Nov 2024 | Time Spent : 00 : 29 : 11
          </div>
        </div>

        {/* Statistiques */}
        <div className="flex items-center space-x-10">
          {/* Badges */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-[#10b981] bg-[#10b981] text-white rounded-full flex justify-center items-center">
                v
              </div>
              <span>Correctly answered : 10</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-red-600 bg-red-600 text-white rounded-full flex justify-center items-center">
                x
              </div>
              <span>Incorrectly answered : 10</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-500/70 rounded-full" />
              <span>Not answered : 0</span>
            </div>
          </div>

          {/* Barre circulaire */}
          <div className="relative w-40 h-40">
            <svg
              className="w-full h-full transform rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="5"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#10b981"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset="70"
                strokeLinecap="round"
                className=""
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">75%</span>
              <span className="text-xs">Grades completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <SelectedValidation />
        <button onClick={handleExitReset} className="px-4 py-2 bg-[#EECE84] text-sm rounded-full">
          Try again
        </button>
        <button onClick={handleExitExam}  className="flex flex-row items-center px-4 py-2 bg-white text-red-600 rounded-full text-sm">
          <Power className="h-w h-4" />
          Exit
        </button>
      </div>

      {/* Corrections */}
      <div className="space-y-5">
        {corrections.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start p-4 border rounded-2xl space-y-0.5 bg-white"
          >
            <div className='flex flex-row gap-2 font-bold text-xl'>
              Question
              <span>{item.id}</span>
            </div>
            <span
              className={`py-1 text-sm rounded-full flex flex-row items-center gap-2 ${
                item.status === "Good answer"
                  ? "text-[#10b981]"
                  : "text-red-600"
              }`}
            >
              { item.status == "Good answer" ? (
                <div className="w-5 h-5 border-2 border-[#10b981] bg-[#10b981] text-white rounded-full flex justify-center items-center">
                  v
                </div>
              ) : (
                <div className="w-5 h-5 border-2 border-red-600 bg-red-600 text-white rounded-full flex justify-center items-center">
                  x
                </div>
              ) }
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Validation;