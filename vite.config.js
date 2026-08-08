import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// DECISÃO TÉCNICA: base configurado como './' para funcionar em subpastas
// da LocaWeb (ex: /home/brunob61/) sem quebrar referências de assets.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Code splitting manual para melhor cache e performance
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
