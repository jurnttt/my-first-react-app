import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; 

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() 
  ],
  base: './',
  build: {
    // Splits vendor dependencies (React, etc.) into separate smaller files
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000, // Raises the warning limit to 1000 kB
  }
});