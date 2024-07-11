import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-dom']
  //       }
  //     }
  //   }
  // },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://mern-portfolio-server-hqpsttave-jobayermannans-projects.vercel.app/',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
});
