import React from 'react';

interface ScoreBoardProps {
  team1Score: number;
  team2Score: number;
  onRestart: () => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ team1Score, team2Score, onRestart }) => {
  const winner = team1Score > team2Score ? 'Team 1' : team1Score < team2Score ? 'Team 2' : 'It\'s a tie';
  const winnerGradient = winner === 'Team 1' 
    ? 'from-blue-600 to-blue-400'
    : winner === 'Team 2' 
    ? 'from-red-600 to-red-400'
    : 'from-purple-600 to-purple-400';

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center transform transition-all hover:scale-[1.02]">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Final Scores</h2>
      <div className="flex justify-center gap-16 mb-8">
        <div className="text-center transform transition-all hover:scale-110">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl p-6 shadow-lg mb-2">
            <div className="text-xl font-bold mb-2">Team 1</div>
            <div className="text-4xl font-bold">{team1Score}</div>
          </div>
        </div>
        <div className="text-center transform transition-all hover:scale-110">
          <div className="bg-gradient-to-r from-red-600 to-red-400 text-white rounded-2xl p-6 shadow-lg mb-2">
            <div className="text-xl font-bold mb-2">Team 2</div>
            <div className="text-4xl font-bold">{team2Score}</div>
          </div>
        </div>
      </div>
      <div className={`text-2xl font-bold mb-8 bg-gradient-to-r ${winnerGradient} inline-block text-transparent bg-clip-text`}>
        {winner === 'It\'s a tie' ? winner : `${winner} wins!`}
      </div>
      <button
        onClick={onRestart}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:from-purple-700 hover:to-pink-700 transform transition-all hover:scale-105"
      >
        Play Again
      </button>
    </div>
  );
};