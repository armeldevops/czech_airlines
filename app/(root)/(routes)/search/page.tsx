'use client'

import SearchBar from '@/components/SearcBar';
import { SelectVideo } from '@/components/SelectVideo';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState<'Courses' | 'Questions'>('Courses');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      {/* Navigation Bar */}
      <div className="flex border border-primary/10 shadow-sm rounded-full bg-transparent p-1 space-x-2">
        <Button
          onClick={() => setActiveTab('Courses')}
          className={`rounded-full px-4 py-2 font-medium ${
            activeTab === 'Courses' ? 'bg-[#EECE84] text-black hover:bg-[#EECE84] shadow' : 'bg-transparent border-none shadow-none hover:bg-transparent text-black'
          }`}
        >
          Courses
        </Button>
        <Button
          onClick={() => setActiveTab('Questions')}
          className={`rounded-full px-4 py-2 font-medium ${
            activeTab === 'Questions' ? 'bg-[#EECE84] text-black hover:bg-[#EECE84] shadow' : 'bg-transparent border-none shadow-none hover:bg-transparent text-black'
          }`}
        >
          Questions
        </Button>
      </div>

      {/* SearchBar and SelectVideo (always visible) */}
      <SearchBar />
      <SelectVideo />
    </div>
  );
};

export default SearchPage;