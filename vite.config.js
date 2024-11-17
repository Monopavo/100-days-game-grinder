import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = '100-days-game-grinder';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env': env
    },
    base: `/${repoName}/`,
    build: {
      outDir: 'dist'
    }
  };
});
