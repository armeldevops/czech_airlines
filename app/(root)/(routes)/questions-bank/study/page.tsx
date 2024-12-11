'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Filters from '../_components/Filters'
import { SelectStudy } from '@/components/SelectStudy'
import { Checkbox } from '@/components/ui/checkbox'
import ProgressBar from '../_components/Postbar'

const chaptersData: Record<string, string[]> = {
  "chapter-1": ["Introduction", "Bases fondamentales", "Approfondissement"],
  "chapter-2": ["Concepts avancés", "Pratiques recommandées"],
  "chapter-3": ["Applications pratiques", "Exemples concrets"],
  "chapter-4": ["Révision", "Études de cas", "Conclusion"],
};

const Study = () => {
  const [checkedChapters, setCheckedChapters] = useState<Record<string, boolean>>({
    "chapter-1": true,
    "chapter-2": false,
    "chapter-3": false,
    "chapter-4": false,
  })

  const [selectedSyllabus, setSelectedSyllabus] = useState<string | null>(null)

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleCheckboxChange = (chapter: string) => {
    setCheckedChapters((prev) => ({
      ...prev,
      [chapter]: !prev[chapter],
    }))
  }

  const handleSelectionChange = (value: string) => {
    console.log('Syllabus sélectionné :', value)
    setSelectedSyllabus(value)
    // Réinitialiser les chapitres sélectionnés si nécessaire
    setCheckedChapters({
      "chapter-1": false,
      "chapter-2": false,
      "chapter-3": false,
      "chapter-4": false,
    })
  }

  const handleStart = () => {
    const selectedChapters = Object.entries(checkedChapters)
      .filter(([isChecked]) => isChecked)
      .map(([chapter]) => chapter)

    if (selectedChapters.length === 0) {
      alert('Veuillez sélectionner au moins un chapitre pour commencer.')
      return
    }

    console.log('Démarrer l’étude avec le syllabus :', selectedSyllabus)
    console.log('Chapitres sélectionnés :', selectedChapters)
    // Ajoutez ici la logique pour démarrer l’étude
  }

  const toggleDropdown = (chapter: string) => {
    setOpenDropdown(openDropdown === chapter ? null : chapter)
  }

  return (
    <div className="min-h-screen max-w-[1350px] mx-auto p-7">
      {/* Bouton de retour */}
      <Button variant="ghost" className="hover:bg-transparent">
        <Link href="/questions-bank" className="flex flex-row items-center gap-1">
          <ChevronLeft className="w-6 h-6" />
          <span className="text-2xl">Study</span>
        </Link>
      </Button>

      {/* Composant Filters */}
      <Filters />

      {/* Composant SelectStudy */}
      <div className="flex items-center justify-center mt-6">
        <SelectStudy onSelectionChange={handleSelectionChange} />
      </div>

      {/* Liste des chapitres */}
      <div className="mt-10 mx-auto max-w-[800px] mb-10">
        <h2 className="text-xl font-semibold mb-2">Subjects</h2>
        <div className="flex flex-col space-y-1">
          {Object.keys(checkedChapters).map((chapter) => (
            <div key={chapter} className="flex flex-col">
              <div
                className="flex items-center justify-between bg-white rounded-xl shadow-lg p-4 cursor-pointer"
                onClick={() => toggleDropdown(chapter)}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={checkedChapters[chapter]}
                    onCheckedChange={() => handleCheckboxChange(chapter)}
                  />
                  <span className="text-sm">{`Subject ${chapter.split("-")[1]}`}</span>
                </div>
                <div className='flex flex-row items-center text-gray-500 gap-2'>
                  <span className="text-sm">30 sujets</span>
                  <ChevronDown className={`w-6 h-6 transform ${openDropdown === chapter ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Dropdown des chapitres */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown === chapter ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 rounded-xl p-3 ml-4 mr-6">
                  <div className="p-3 rounded-lg space-y-2">
                    {chaptersData[chapter]?.map((subChapter: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-xl">
                        <Checkbox
                          checked={checkedChapters[`${chapter}-${subChapter}`]}
                        />
                        <span className="text-sm text-gray-600">{subChapter}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <ProgressBar current={120} total={120} />

      {/* Bouton Start */}
      <div className="mt-10 flex items-center justify-center">
        <Button
          onClick={handleStart} // Appel à la fonction de redirection
          className="mt-4 bg-[#EECE84] text-black rounded-full hover:bg-[#EECE84]/80"
        >
          <span className="px-6">Start</span>
        </Button>
      </div>
    </div>
  )
}

export default Study