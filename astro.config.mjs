import { defineConfig } from 'astro/config';
import unocss from '@unocss/astro';
import presetWind from '@unocss/preset-wind';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    injectReset: true,
    presets: [presetWind()],
    transformers: [transformerVariantGroup()]
  }), preact()]
});