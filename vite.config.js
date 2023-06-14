import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000,
    rollupOptions: {
      output: {
        dir: 'build',
      },
    },
  },
  // ...other config settings
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        // react(),
      ],
    },
  },
});
