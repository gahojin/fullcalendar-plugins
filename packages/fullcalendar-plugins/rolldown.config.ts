import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

export default defineConfig([
  {
    external: [/^node:/, /^@types\//, /^@fullcalendar\//, /^@date-fns\//, 'date-fns'],
    treeshake: true,
    optimization: {
      inlineConst: { mode: 'all', pass: 5 },
    },
    experimental: {
      nativeMagicString: true,
    },
    input: ['src/index.ts', 'src/date-fns-timezone.ts'],
    output: [{ dir: 'dist', format: 'es', sourcemap: true, cleanDir: true }],
    plugins: [dts()],
  },
])
