/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import blitsVitePlugins from '@lightningjs/blits/vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: '/', // Set to your base path if you are deploying to a subdirectory (example: /myApp/)
    build: {
      target: 'es2015',
      sourcemap: true,
    },
    plugins: [...blitsVitePlugins],
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
      fs: {
        allow: ['..'],
      },
    },
    preview: {
      host: '0.0.0.0',
    },
    worker: {
      format: 'es',
    },
  }
})
