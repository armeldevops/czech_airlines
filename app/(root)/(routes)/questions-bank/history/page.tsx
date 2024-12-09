'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, StepBack, StepForward } from 'lucide-react';
import Link from 'next/link';

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Données simulées
  const historyData = Array.from({ length: 20 }, () => ({
    topic: 'Air law',
    date: '13 Janvier 2025',
    questions: 234,
    type: 'Mixed',
    time: '13:40',
  }));

  // Pagination logic
  const totalPages = Math.ceil(historyData.length / rowsPerPage);
  const paginatedData = historyData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen p-7 max-w-7xl mx-auto space-y-6">
      <Link href='/questions-bank' className='flex flex-row items-center gap-1'>
        <ChevronLeft className='w-6 h-6' />
        <span className='text-2xl'>History</span>
      </Link>
      
      {/* Liste */}
      <div className="space-y-3 p-1.5">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white/80 p-4 rounded-md shadow-sm"
          >
              <p className="text-lg font-semibold">{item.topic}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p>{item.questions} questions</p>
              <p className="text-sm text-gray-500">{item.type}</p>
            <p className="text-sm font-medium">{item.time}</p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className='gap-0.5 flex flex-row items-center justify-center'
          disabled={currentPage === 1}
        >
          <StepBack className='w-6 h-6' />
        </Button>
        <span className="flex items-center">
          Page {currentPage} / {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNext}
          className='gap-0.5 flex flex-row items-center justify-center'
          disabled={currentPage === totalPages}
        >
          <StepForward className='w-6 h-6' />
        </Button>
      </div>
    </div>
  );
};

export default History;