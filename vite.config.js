import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   base: '/mqtt-react',
   plugins: [react()],
   build: {
      chunkSizeWarningLimit: 100000000,
   },
});
