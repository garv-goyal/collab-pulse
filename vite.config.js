import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'frappe-gantt/dist/frappe-gantt.css': '/node_modules/frappe-gantt/dist/frappe-gantt.css'
    }
  }
});
