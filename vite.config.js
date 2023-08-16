// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname);
const outDir = resolve(__dirname, "dist");

/** @type {import('vite').UserConfig} */
export default {
  base: "./",
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        gallerytempel: resolve(root, "gallerytempel-1.html"),
      },
    },
    emptyOutDir: true,
  }}