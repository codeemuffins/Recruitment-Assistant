import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The cloud preview serves the app through a per-chat hostname. Vite blocks
// unknown hosts, so the hostname is supplied per process instead of being
// written into the repository.
const previewHost = process.env.PREVIEW_HOSTNAME;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHost ? [previewHost] : [],
  },
});
