import * as path from 'path';
import license from 'rollup-plugin-license';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [
    license({
      banner: {
        content: `Please see /toolbox/license.txt for license information`,
        commentStyle: 'ignored',
      },
      thirdParty: {
        includePrivate: false,
        output: {
          file: path.join('dist', 'license.txt')
        },
      },
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        date: resolve(__dirname, 'date/index.html')
      }
    }
  }
});