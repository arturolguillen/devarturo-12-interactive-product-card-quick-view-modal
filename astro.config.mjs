// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            name: 'Plus Jakarta Sans',
            cssVariable: '--font-plus-jakarta-sans',
            provider: fontProviders.google(),
            weights: [300, 400, 500, 600],
            styles: ['normal'],
        },
        {
            name: 'Syne',
            cssVariable: '--font-syne',
            provider: fontProviders.google(),
            weights: [700, 800],
            styles: ['normal'],
        },
    ],
    vite: {
        plugins: [tailwindcss()]
    }
});