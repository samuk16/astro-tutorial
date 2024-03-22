import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import presetWind from '@unocss/preset-wind';
// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
      presets: [
        presetWind()
      ],
    }),
  ]
});