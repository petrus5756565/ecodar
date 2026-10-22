import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos para funcionar no GitHub Pages (subpasta /ecodar/).
  base: './',
});
