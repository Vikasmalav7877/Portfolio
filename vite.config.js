import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'copy-portfolio-assets',
    writeBundle(options) {
      for (const directory of ['image', 'CV']) {
        cpSync(resolve(directory), resolve(options.dir, directory), { recursive: true });
      }
    },
  }],
});
