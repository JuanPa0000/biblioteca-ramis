import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // NO abre navegador automáticamente
    host: true,  // hace que sea accesible desde localhost y red
  }

})
