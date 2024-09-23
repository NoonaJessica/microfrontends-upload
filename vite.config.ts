import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'upload',
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        host: 'http://localhost:4173/assets/remoteEntry.js',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './Upload': './src/views/upload/Upload',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })
  ],
  server: {
    port: 3015,
  },
  preview: {
    port: 3015,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
