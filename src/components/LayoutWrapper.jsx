import React from 'react';

export default function LayoutWrapper({ onBack, children }) {
  return (
    <div className="relative w-full min-h-screen">
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 z-50 bg-slate-800 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-opacity-90 cursor-pointer"
      >
        ← Back to Portfolio
      </button>
      {children}
    </div>
  );
}