import React from 'react';

const BackgroundOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Orb */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px] animate-blob mix-blend-screen"></div>
      
      {/* Top Right Orb (delay animation) */}
      <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-600/20 blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      
      {/* Bottom Center Orb (delay animation) */}
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default BackgroundOrbs;
