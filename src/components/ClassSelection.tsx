import React from 'react';
import { GraduationCap } from 'lucide-react';

interface ClassSelectionProps {
  onClassSelect: (classNumber: number) => void;
}

export const ClassSelection: React.FC<ClassSelectionProps> = ({ onClassSelect }) => {
  const classes = [8, 9, 10];

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center">
      <div className="flex items-center justify-center mb-6">
        <GraduationCap className="w-8 h-8 text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Select Your Class</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {classes.map((classNumber) => (
          <button
            key={classNumber}
            onClick={() => onClassSelect(classNumber)}
            className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 
                     transition-all transform hover:scale-[1.02] border border-purple-100 shadow-md group"
          >
            <div className="text-xl font-bold text-gray-800 group-hover:text-purple-700">
              Class {classNumber}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};