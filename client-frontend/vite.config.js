import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// If you are using React
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  plugins: [
    react(), // Add your framework plugin here if needed
    tailwindcss(),
  ],
});
