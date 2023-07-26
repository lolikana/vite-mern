/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@hooks',
          replacement: path.resolve(__dirname, 'src/hooks')
        },
        {
          find: '@pages',
          replacement: path.resolve(__dirname, 'src/pages')
        }
      ]
    }
  };
});
