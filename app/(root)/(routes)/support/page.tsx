'use client'

import SearchBar from '@/components/SearcBar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { support } from '@/lib/support';
import { ChevronRight, Mail } from 'lucide-react';
import React, { useState } from 'react';

const SupportPage = () => {
  const [activeId, setActiveId] = useState<number | null>(null); // État pour gérer l'élément actif

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-7 ">
      {/* Barre de recherche */}
      <div className="flex items-center justify-center mt-10">
        <SearchBar />
      </div>

      {/* Titre principal */}
      <div className="py-8 mt-10">
        <span className="text-5xl font-extrabold">Frequently Asked Questions</span>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-row">
        {/* Liste des questions à gauche */}
        <div className="flex flex-col w-1/2 bg-white shadow-lg rounded-lg mt-10w-[250px] h-full mt-28">
          {support.map((item) => (
            <>
              <div
              key={item.id}
              className={`flex items-center justify-between cursor-pointer transition-all duration-300 rounded-md p-6 ${
                activeId === item.id ? 'bg-yellow-600/60' : 'text-black'
              }`}
              onClick={() => setActiveId(item.id)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-4 w-4 rounded-full ${
                    activeId === item.id ? 'bg-black' : 'bg-yellow-600/60'
                  }`}
                ></div>
                <h2 className="text-sm font-medium">{item.title}</h2>
              </div>
              <ChevronRight className={activeId === item.id ? '' : 'text-yellow-600/60'} />
            </div>
            <Separator />
            </>
          ))}
        </div>

        {/* Carte de détails à droite */}
        <div className="flex-1 mt-10">
          {activeId !== null ? (
            <div className="bg-white shadow-lg rounded-lg p-10 w-[600px] h-[500px] border border-yellow-600/60">
              <h2 className="text-2xl font-extrabold mb-4">
                {support.find((item) => item.id === activeId)?.title}
              </h2>
              <p className="text-gray-700 text-sm leading-6">
                {support.find((item) => item.id === activeId)?.description}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>Select a question to see the details</p>
            </div>
          )}
        </div>
      </div>
      <Button className='bg-yellow-600/60 rounded-full text-black hover:bg-yellow-600/50 mt-10 h-12 w-36'>
        <Mail />
        Contact Us
      </Button>
    </div>
  );
};

export default SupportPage;
