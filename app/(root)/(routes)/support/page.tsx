'use client'

import SearchBar from '@/components/SearcBar';
import { support } from '@/lib/support';
import React, { useState } from 'react';

const SupportPage = () => {
  const [activeId, setActiveId] = useState<number | null>(null); // État pour gérer l'élément actif

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-7 flex flex-col">
      {/* Barre de recherche */}
      <div className="flex items-center justify-center mt-10">
        <SearchBar />
      </div>

      {/* Titre principal */}
      <div className="py-8 mt-10">
        <span className="text-5xl font-extrabold">Frequently Asked Questions</span>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-row gap-10 mt-10">
        {/* Liste des questions à gauche */}
        <div className="flex flex-col border border-white bg-white rounded-t-xl w-1/3">
          {support.map((item) => (
            <div
              key={item.id}
              className={`shadow-lg overflow-hidden p-4 cursor-pointer transition-all duration-300 ${
                activeId === item.id ? ' bg-yellow-600/50' : 'bg-white'
              }`}
              onClick={() => setActiveId(item.id)} // Définit la question active
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-6 w-6 rounded-full ${
                    activeId === item.id ? 'bg-black' : 'bg-yellow-600/50'
                  }`}
                />
                <h2 className="text-lg font-bold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Carte de détails à droite */}
        <div className="flex-1">
          {activeId !== null ? (
            <div className="bg-white shadow-lg rounded-lg p-6">
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
    </div>
  );
};

export default SupportPage;
