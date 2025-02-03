import React, { useState, useEffect } from 'react';
import { getQuestionsByClass } from './data/questions';
import { QuizCard } from './components/QuizCard';
import { ScoreBoard } from './components/ScoreBoard';
import { ClassSelection } from './components/ClassSelection';
import { Trophy } from 'lucide-react';
import type { Question } from './data/questions';

function App() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  const currentTeam = currentQuestionIndex % 2 === 0 ? 'Team 1' : 'Team 2';

  useEffect(() => {
    const loadQuestions = async () => {
      if (selectedClass) {
        setLoading(true);
        try {
          const generatedQuestions = await getQuestionsByClass(selectedClass);
          setQuestions(generatedQuestions);
        } catch (error) {
          console.error('Error loading questions:', error);
        }
        setLoading(false);
      }
    };

    loadQuestions();
  }, [selectedClass]);

  const handleClassSelect = (classNumber: number) => {
    setSelectedClass(classNumber);
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    
    if (currentTeam === 'Team 1' && isCorrect) {
      setTeam1Score(prev => prev + 1);
    } else if (currentTeam === 'Team 2' && isCorrect) {
      setTeam2Score(prev => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setGameFinished(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setSelectedClass(null);
    setCurrentQuestionIndex(0);
    setTeam1Score(0);
    setTeam2Score(0);
    setGameFinished(false);
    setQuestions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-10 h-10 text-yellow-300 animate-pulse" />
            <h1 className="text-4xl font-bold text-white text-shadow">Team Quiz Challenge</h1>
          </div>
          {selectedClass && !gameFinished && (
            <div className="flex justify-center gap-12 mt-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 rounded-full shadow-lg">
                <div className="text-white font-bold text-xl">Team 1: {team1Score}</div>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-red-400 px-6 py-3 rounded-full shadow-lg">
                <div className="text-white font-bold text-xl">Team 2: {team2Score}</div>
              </div>
            </div>
          )}
        </div>

        {loading ? (
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">Generating questions...</p>
          </div>
        ) : !selectedClass ? (
          <ClassSelection onClassSelect={handleClassSelect} />
        ) : !gameFinished && questions.length > 0 ? (
          <QuizCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentTeam={currentTeam}
          />
        ) : gameFinished ? (
          <ScoreBoard
            team1Score={team1Score}
            team2Score={team2Score}
            onRestart={handleRestart}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;