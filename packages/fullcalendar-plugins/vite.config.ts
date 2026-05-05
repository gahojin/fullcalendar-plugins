import { mergeConfig } from 'vite'
import baseConfig from '../../vite.config.ts'

export default mergeConfig(baseConfig, {
  build: {
    lib: {
      entry: ['src/index.ts', 'src/date-fns-timezone.ts'],
      formats: ['es'],
    },
    rolldownOptions: {
      platform: 'neutral',
      external: [/^node:/, /^@types\//, /^@fullcalendar\//, /^@date-fns\//, 'date-fns'],
    },
  },
})
