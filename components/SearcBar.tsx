'use client';

import { Search } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const SearchBar = () => {
  return (
    <div className="w-[500px]">
      {/* Form for search */}
      <form action="/search" method="GET" className="relative">
        {/* Search input */}
        <input
          type="text"
          name="q"
          placeholder="Search by keywords"
          className="w-full py-4 px-4 pl-4 bg-white rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-600/60 focus:border-transparent transition-all duration-200"
        />
        <Button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-600/60 rounded-full px-4 py-6 text-sm font-medium hover:bg-yellow-600/50 transition-colors duration-200"
        >
          <Search className='w-4 h-4 text-black' />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;