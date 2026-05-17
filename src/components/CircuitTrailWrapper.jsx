import React from 'react';

const CircuitTrailWrapper = ({ children, className = '', containerClassName = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl ${containerClassName} group`}>
      {/* The rotating gradient trail */}
      <div className="absolute -inset-[100%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#1e3a8a_120deg,#3b82f6_140deg,#93c5fd_160deg,#8b5cf6_180deg,transparent_180deg,transparent_280deg,#1e3a8a_300deg,#3b82f6_320deg,#93c5fd_340deg,#8b5cf6_360deg)] z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* The inner content background to mask the gradient, leaving only the border */}
      {/* 2px inset gives a 2px border */}
      <div className={`absolute inset-[2px] bg-gray-900/90 backdrop-blur-xl rounded-xl z-0`}></div>
      
      {/* The actual children on top */}
      <div className={`relative z-10 h-full ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CircuitTrailWrapper;
