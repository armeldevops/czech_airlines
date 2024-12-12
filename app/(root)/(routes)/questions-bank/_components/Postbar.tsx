import React from 'react';

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progressPercentage = Math.min((current / total) * 100, 100);

  return (
    <div className="flex items-center space-x-4 bg-white rounded-full h-16 shadow-lg max-w-6xl p-4 mx-auto">
      <div className="text-yellow-600 font-semibold text-sm border border-primary/20 p-2 rounded-3xl">{`${current} / ${total}`}</div>
      <div className="relative flex-grow h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-yellow-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;