import React, { Suspense, useMemo } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { PROJECTS } from './config/projects';
import { ProjectCard, PlaceholderCard } from './components/ProjectCard';
import { ChunkErrorBoundary } from './components/ErrorBoundary';

// Global shared fallback skeleton loader
const PageLoader = () => (
  <div className="p-8 text-center text-slate-600 font-bold animate-pulse">
    Loading architecture...
  </div>
);

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        
        <header className="text-center md:text-left mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#502050]">
            Hi,
          </h1>
          <p className="text-slate-600 text-lg">
            Welcome to my 2026 AI component-driven architecture portfolio. Below are the projects I have built using React and Tailwind CSS.
          </p>
        </header>

        <main>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.path} project={project} />
            ))}
            <PlaceholderCard />       
          </div>
        </main>

      </div>
    </div>
  );
}

export default function App() {
  // useMemo ensures lazy route instances are safely cached during re-renders
  const dynamicRoutes = useMemo(() => {
    return PROJECTS.map((project) => {
      const LazyProjectComponent = React.lazy(project.component);
      
      return (
        <Route 
          key={project.path}
          path={project.path} 
          element={
            <div className="relative min-h-screen">
              <Link 
                to="/"
                className="fixed top-4 left-4 z-50 bg-[#502050] text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#502050]"
              >
                ← Back to Portfolio
              </Link>
              <ChunkErrorBoundary>
                <LazyProjectComponent />
              </ChunkErrorBoundary>
            </div>
          } 
        />
      );
    });
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {dynamicRoutes}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
