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
    <div className="min-h-screen max-w-7xl mx-auto p-7 space-y-8">
      {/* Barre de recherche */}
      <div className="flex items-center justify-center mt-2">
        <SearchBar />
      </div>

      <br />

      {/* Titre principal */}
      <div>
        <span className="text-5xl font-extrabold">Frequently Asked Questions</span>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-row relative justify-between items-center h-[600px] ml-0 md:ml-16">
        {/* Liste des questions à gauche */}
        <div className="flex flex-col w-1/2 bg-white shadow-lg rounded-xl -ml-16 z-10">
          {support.map((item, index) => {
            const getRoundedClass = () => {
              if (index === 0) return 'rounded-t-xl';
              if (index === support.length - 1) return 'rounded-b-xl';
              return 'rounded-none';
            };

            return (
              <div key={item.id}>
                <div
                  className={`flex items-center justify-between cursor-pointer transition-all duration-300 p-6 ${
                    activeId === item.id ? 'bg-[#EECE84]' : 'text-black'
                  } ${getRoundedClass()}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        activeId === item.id ? 'bg-black' : 'bg-[#EECE84]'
                      }`}
                    ></div>
                    <h2 className="font-medium">{item.title}</h2>
                  </div>
                  <ChevronRight
                    className={activeId === item.id ? '' : 'text-[#EECE84]'}
                  />
                </div>
                {index !== support.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>

        {/* Carte de détails à droite */}
        <div className="flex-1 overflow-hidden relative -ml-16 z-0">
          {activeId !== null ? (
            <div className="bg-white shadow-lg rounded-lg p-16 w-[700px] h-[510px] border border-[#EECE84]">
              <h2 className="text-2xl font-extrabold mb-4 ml-10">
                {support.find((item) => item.id === activeId)?.title}
              </h2>
              <p className="text-gray-700 text-sm leading-6 ml-10">
                {support.find((item) => item.id === activeId)?.description}
              </p>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-16 w-[700px] h-[510px] border border-[#EECE84]">
              <h2 className="text-2xl font-extrabold mb-4 ml-10">
                {support[0]?.title}
              </h2>
              <p className="text-gray-700 text-sm leading-6 ml-10">
                {support[0]?.description}
              </p>
            </div>
          )}
        </div>
      </div>
      <Button className='bg-[#EECE84] rounded-full text-black hover:bg-[#EECE84] mt-10 h-12 w-36'>
        <Mail className='' />
        Contact Us
      </Button>
    </div>
  );
};

export default SupportPage;