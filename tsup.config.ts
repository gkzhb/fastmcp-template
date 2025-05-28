import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  const buildOptions: Options = {
    name: 'Build',
    entry: ['src/index.ts'],
    splitting: false,
    minify: true,
  }
  const devOptions: Options = {
    name: 'Develop',
    entry: ['src/index.ts'],
    onSuccess: 'node dist/index.js',
  }
  return options.watch ? devOptions : buildOptions
})
