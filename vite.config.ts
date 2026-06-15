import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          monarcas: path.resolve(__dirname, 'monarcas.html'),
          exploradores: path.resolve(__dirname, 'exploradores.html'),
          virreinatos: path.resolve(__dirname, 'virreinatos.html'),
          batallas: path.resolve(__dirname, 'batallas.html'),
          tercios: path.resolve(__dirname, 'tercios.html'),
          comercio: path.resolve(__dirname, 'comercio.html'),
          cronologia: path.resolve(__dirname, 'cronologia.html'),
          mapas: path.resolve(__dirname, 'mapas.html'),
          recursos: path.resolve(__dirname, 'recursos.html'),
          buscador: path.resolve(__dirname, 'buscador.html'),
          contacto: path.resolve(__dirname, 'contacto.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
