// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rpiedrahita.co',
  integrations: [
    tailwind({
      // Aplicamos el CSS base nosotros mismos en BaseLayout para controlar
      // el orden de capas y las directivas @layer.
      applyBaseStyles: false,
    }),
    icon({
      include: {
        // Iconos que usaremos en todo el sitio (material-symbols).
        'material-symbols': ['*'],
        // Set ligero para iconos sociales / acción.
        'ph': ['*'],
      },
    }),
  ],
});
