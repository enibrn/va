import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   fs: {
  //     allow: [
  //       // Permetti il caricamento dei file fuori dalla cartella 'app'
  //       path.resolve(__dirname, '..')
  //     ]
  //   }
  // }
})
