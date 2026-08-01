import React from 'react';

export class ChunkErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Layout Chunk Loading Error Failed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Failed to load project</h2>
          <p className="text-slate-600 mb-4">The connection timed out or a bundle was lost.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#502050] text-white px-4 py-2 rounded-lg font-semibold shadow-md"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
