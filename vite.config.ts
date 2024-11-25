import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    // Copy the bootstrap files to public vendor so we don't rely on CDNs (which may fail)
    copy({
      targets: [
        {
          src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
          dest: 'public/vendor/bootstrap',
        },
        {
          src: 'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
          dest: 'public/vendor/bootstrap',
        },
      ],
    }),
  ],
});
