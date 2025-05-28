import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
 plugins: [react()],
 base: 'https://davidlopezsomacyl.github.io/', // Ejemplo: '/mi-proyecto-react/'
})