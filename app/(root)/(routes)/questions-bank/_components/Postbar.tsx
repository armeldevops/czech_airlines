import React from 'react';

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progressPercentage = Math.min((current / total) * 100, 100);

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-full shadow-lg max-w-md mx-auto">
      <div className="text-yellow-600 font-semibold text-sm">{`${current} / ${total}`}</div>
      <div className="relative flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-yellow-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;