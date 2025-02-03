import React, { useState } from 'react';
import { Question } from '../data/questions';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  currentTeam: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, currentTeam }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);

  const gradientClass = currentTeam === 'Team 1' 
    ? 'from-blue-600 to-blue-400'
    : 'from-red-600 to-red-400';

  const handleAnswerClick = (answer: string) => {
    if (isAnswerLocked) return;
    
    setSelectedAnswer(answer);
    setIsAnswerLocked(true);

    // Delay to show the color feedback
    setTimeout(() => {
      onAnswer(answer);
      setSelectedAnswer(null);
      setIsAnswerLocked(false);
    }, 1000);
  };

  const getOptionStyle = (option: string) => {
    if (!selectedAnswer) {
      return "bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100";
    }

    if (option === question.correctAnswer) {
      return "bg-gradient-to-r from-green-100 to-green-200 border-green-300";
    }

    if (option === selectedAnswer && option !== question.correctAnswer) {
      return "bg-gradient-to-r from-red-100 to-red-200 border-red-300";
    }

    return "bg-gradient-to-r from-purple-50 to-pink-50 opacity-50";
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-[1.02]">
      <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${gradientClass} text-lg font-bold text-white mb-6 shadow-lg`}>
        {currentTeam}'s Turn
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            disabled={isAnswerLocked}
            className={`p-4 text-left rounded-xl transition-all transform hover:scale-[1.02] border text-gray-700 font-medium shadow-md
              ${getOptionStyle(option)}
              ${isAnswerLocked ? 'cursor-default' : 'hover:shadow-lg'}
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};