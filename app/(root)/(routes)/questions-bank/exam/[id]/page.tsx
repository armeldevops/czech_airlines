'use client'

import { Button } from '@/components/ui/button';
import { ArrowBigLeft, ArrowBigRight, CircleAlert, Save, Send } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const ExamId = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number>(1);
  const [operationInProgress, setOperationInProgress] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<{ label: string, description: string } | null>(null);
  const [title] = useState<string>('');
  const [description] = useState<string>('');
  const [commentary, setCommentary] = useState<string>('');

  const totalQuestions = 40;

  const router = useRouter();
  const params = useParams();
  const currentExamId = params?.id;

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(2 * 60 * 60);

  // Allow indexing with number
  const answeredQuestions: Record<number, string> = {
    1: 'correct',
    2: 'correct',
    3: 'correct',
    4: 'incorrect',
    5: 'correct',
    6: 'correct',
    7: 'correct',
    8: 'correct',
    9: 'correct',
    10: 'correct',
    11: 'correct',
    12: 'incorrect',
  };

  const handleOptionClick = (index: number) => {
    setSelectedAnswer(index);
  };

  const getQuestionStatus = (questionNumber: number) => {
    if (answeredQuestions[questionNumber] === 'correct') return 'bg-green-500 text-black';
    if (answeredQuestions[questionNumber] === 'incorrect') return 'bg-red-600 text-black';
    return 'bg-white text-black';
  };

  const renderQuestionButtons = () => {
    return Array.from({ length: totalQuestions }, (_, index) => {
      const questionNumber = index + 1;
      return (
        <button
          key={questionNumber}
          onClick={() => setActiveQuestion(questionNumber)}
          className={`w-12 h-10 rounded-md font-medium flex items-center justify-center border transition-all ${getQuestionStatus(
            questionNumber
          )}`}
        >
          {questionNumber}
        </button>
      );
    });
  };

  // Effect to decrease the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Decrease every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the timer as HH:MM:SS
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  // Handle next and previous question
  const goToNextQuestion = () => {
    if (activeQuestion < totalQuestions) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (activeQuestion > 1) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const handleValidate = async () => {
    setOperationInProgress(true);
  
    // Données simulées pour la soumission
    const examId = currentExamId;
    const submissionData = {
      examId,
      answeredQuestions,
      timeLeft,
    };
  
    try {
      // Simuler un délai pour l'envoi des données
      console.log('Données soumises :', submissionData);
  
      // Simuler un délai pour "l'appel" à une API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule un délai de 2 secondes
  
      // Simuler une réponse réussie
      console.log('Simulation de réponse réussie.');
  
      // Redirection vers une URL dynamique avec l'ID
      router.push(`/questions-bank/exam/${examId}/validation`);
    } catch (error) {
      console.error('Erreur simulée:', error);
      alert('Impossible d\'envoyer les données, veuillez réessayer.');
    } finally {
      setOperationInProgress(false);
    }
  };


  return (
    <div className="min-h-screen max-w-7xl mx-auto p-7 space-y-10">
      <div className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-red-600 rounded-full" />
          <div className="w-5 h-5 border-2 border-orange-600 rounded-full" />
          <div className="w-5 h-5 border-2 border-green-600 rounded-full" />
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Button 
            onClick={goToPreviousQuestion} 
            className="hover:bg-white/50" 
            variant="ghost">
            <ArrowBigLeft />
          </Button>
          <span className="font-medium">
            Question {activeQuestion} / {totalQuestions}
          </span>
          <Button 
            onClick={goToNextQuestion} 
            className="hover:bg-white/50" 
            variant="ghost">
            <ArrowBigRight />
          </Button>
        </div>
        <div className='font-bold text-xl'>{formatTime(timeLeft)}</div>
        <div className="text-red-600 flex flex-row items-center gap-1">
          <CircleAlert className="text-red-600 w-5 h-5" />
          <button onClick={() => setIsModalOpen(true)}>
            Report
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-6 w-full">
        {/* Main Content */}
        <div className="flex-1 space-y-10">
          {/* Options */}
            <span className="text-xl">
              Flight Information Region (FIR) is an airspace within which the following services are provided.
            </span>
            <div className="space-y-2">
              {['Flight information service and alerting service', 'Flight information service and alerting service', 'Flight information service and alerting service', 'Flight information service and alerting service'].map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full flex items-center justify-start p-5 rounded-3xl border-2 transition-all bg-white ${
                      selectedAnswer === index ? 'border-green-500 text-green-500' : 'border-gray-300/20'
                    }`}
                  >
                    <span className={`mr-4 rounded-full ${ selectedAnswer === index ? 'border border-green-500' : 'border border-primary' } p-4 flex items-center justify-center h-4 w-4`}>
                      {index + 1}
                    </span>
                    <span>{option}</span>
                  </button>
                )
              )}
            </div>
        </div>

        <div className="flex flex-col space-y-4 mt-2">
          {/* Sidebar */}
          <div className="w-72 bg-white shadow-lg rounded-lg p-4">
            {/* Pagination */}
            <div className="flex justify-center items-center mb-3 space-x-4">
              <Button className="text-gray-600" variant="ghost">
                <ArrowBigLeft />
              </Button>
              <span className="font-medium">1 / 2</span>
              <Button className="text-gray-600" variant="ghost">
                <ArrowBigRight />
              </Button>
            </div>
            {/* Question Navigator */}
            <div className="grid grid-cols-4 gap-2 ml-2.5 mb-1.5">{renderQuestionButtons()}</div>
          </div>
          {/* Actions */}
          <div className="flex flex-row items-center justify-center gap-2">
            <button onClick={handleValidate} disabled={operationInProgress} className="flex flex-row gap-1 items-center bg-[#EECE84] font-medium px-6 py-2 rounded-full shadow hover:bg-[#EECE84]/80">
              <Send className="h-4 w-4" />
              {operationInProgress ? 'En cours...' : 'Valider'}
            </button>
            <Link href='/questions-bank/exam'>
              <button className="flex flex-row gap-1 items-center bg-white font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100">
                <Save className="h-4 w-4" />
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 p-2 text-2xl font-semibold">
        010 - Communications
      </div>

      {/* Report Modal */}
      {isModalOpen && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-2xl font-semibold mb-4 text-center">Report Issue</h2>
              
              {!selectedIssue ? (
                <div className="space-y-4">
                  {[
                    { label: "What is Inaccurate Content?", description: "Inaccurate content refers to information in the course that is incorrect, misleading, or factually wrong. Reporting it ensures the course maintains its reliability." },
                    { label: "What is Outdated Content?", description: "Outdated content is material that is no longer relevant or up-to-date. Reporting it helps keep courses aligned with current knowledge and standards." },
                    { label: "What is Incomplete Content?", description: "Incomplete content refers to missing sections, examples, or explanations that are necessary for understanding the course." },
                    { label: "What is a Display Issue?", description: "A display issue occurs when course content is visually distorted or not properly formatted, affecting readability or usability." },
                    { label: "What is Other Issue?", description: "Other issues cover any problem not listed, including technical glitches or concerns about the course’s quality or structure." }
                  ].map((issue, index) => (
                    <button
                      key={index}
                      className="w-full p-4 border-2 border-[#EECE84]/50 bg-[#EECE84]/10 rounded-lg text-left"
                      onClick={() => setSelectedIssue(issue)}
                    >
                      <div className="font-semibold">{issue.label}</div>
                      <div className="text-sm text-gray-500">{issue.description}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xl font-semibold">{selectedIssue.label}</label>
                    <p className="text-sm text-gray-500">{selectedIssue.description}</p>
                  </div>
                  {/* Field for Commentary */}
                  <div>
                    <label className="block font-semibold text-xl">Commentary</label>
                    <textarea
                      value={commentary}
                      onChange={(e) => setCommentary(e.target.value)}
                      className="w-full p-2 border-2 rounded-lg mt-2"
                      rows={4}
                      placeholder="Enter any additional comments"
                    />
                  </div>
                </div>
              )}

              <div className='flex flex-row mt-4 gap-2 justify-end items-end'>
                <button
                  className="border border-[#EECE84]/50 hover:bg-[#EECE84]/20 text-black px-6 py-2 rounded-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#EECE84] hover:opacity-80 px-6 py-2 rounded-full flex flex-row items-center gap-1"
                  onClick={() => {
                    if (selectedIssue && title && description) {
                      alert(`Report submitted for: ${selectedIssue.label}\nTitle: ${title}\nDescription: ${description}`);
                      setIsModalOpen(false); // Close the modal after submission
                    } else {
                      alert('Please fill in the title and description.');
                    }
                  }}
                >
                  <Send className='w-4 h-4' />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamId;