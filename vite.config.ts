import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

const resolvePath = (p: string) => path.resolve(__dirname, p);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      '@shared': resolvePath('./src/shared'),
      '@lib': resolvePath('./src/lib'),
      '@app': resolvePath('./src/app'),
      '@widgets': resolvePath('./src/widgets'),
      '@features': resolvePath('./src/features'),
    },
  },
})
