import React from 'react';
import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  const { path, gradient, thumbnailText, title, description } = project;
  
  return (
    <Link 
      to={path} 
      className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#502050] focus:ring-offset-2"
    >
      <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-white text-center transition-transform group-hover:scale-[1.02] duration-300`}>
        <span className="font-bold text-lg tracking-wide">{thumbnailText}</span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-[#502050] transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          View Live Project →
        </span>
      </div>
    </Link>
  );
}

export function PlaceholderCard() {
  return (
    <div className="bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center h-full min-h-[350px]">
      <span className="text-3xl mb-2" role="img" aria-label="rocket">🚀</span>
      <h3 className="font-bold text-slate-700 text-lg">Next Project</h3>
      <p className="text-slate-400 text-sm max-w-[200px] mt-1">
        Coming soon as I expand my portfolio build.
      </p>
    </div>
  );
}