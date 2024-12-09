'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, StepBack, StepForward } from "lucide-react";
import SearchBar from "@/components/SearcBar";

const Glossary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Données simulées
  const glossaryData = Array.from({ length: 50 }, () => ({
    term: "absolute pressure",
    pronunciation: "/ˈæbsəluːt/",
    definition:
      "noun: a unit of force per unit of area without comparison to other pressure. Aircraft show absolute pressure in inches of mercury on the inlet manifold pressure gauge.",
  }));

  // Pagination logic
  const totalPages = Math.ceil(glossaryData.length / rowsPerPage);
  const paginatedData = glossaryData.slice(
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
    <div className="min-h-screen p-7 max-w-6xl mx-auto space-y-10">
      <Link href='/courses' className='flex flex-row items-center gap-1'>
        <ChevronLeft className='w-6 h-6' />
        <span className='text-2xl'>Dictionnary</span>
      </Link>

      <div className="justify-center flex">
        <SearchBar />
      </div>

      {/* Liste en colonnes */}
      <div className="grid grid-cols-2 gap-6 p-2">
        {paginatedData.map((item, index) => (
          <div key={index} className="space-y-2">
            <p className="text-lg font-bold">{item.term}</p>
            <p className="italic text-gray-600">{item.pronunciation}</p>
            <p className="text-sm text-gray-700">{item.definition}</p>
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

export default Glossary;