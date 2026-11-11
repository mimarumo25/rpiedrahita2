/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // =========================================================
        // PALETA CORPORATIVA RPiedrahíta
        // =========================================================
        // --- Colores Institucionales ---
        navy: {
          DEFAULT: '#002D56', // Azul Navy Ejecutivo (dominante)
          50: '#E6EDF3',
          100: '#C1D2E0',
          200: '#8AA8BF',
          300: '#5480A0',
          400: '#2A577A',
          500: '#002D56',
          600: '#002747',
          700: '#001F38',
          800: '#001829',
          900: '#00101B',
        },
        institu: {
          DEFAULT: '#0070C0', // Azul Institucional
          light: '#3FA0DE',
          dark: '#00548F',
        },
        acero: '#2E5478', // Azul Acero
        // --- Neutros ---
        carbon: '#2D2D2D', // Gris Carbón (texto)
        'gris-ej': '#626C77', // Gris Ejecutivo (texto sec.)
        'gris-cl': '#E6E9ED', // Gris Claro Premium (fondos)
        'blanco-co': '#F8F9FB', // Blanco Corporativo (fondo base)
        // --- Énfasis positivo / estratégico ---
        'verde-est': '#6CB83F', // Verde Estratégico (KPIs)
        turquesa: '#00B0F0', // Turquesa Analítico
        coral: '#E66C2C', // Coral Ejecutivo
        morado: '#7030A0', // Morado Estratégico
        // --- Semánticos de riesgo (Tablero Vivo) ---
        'rojo-riesgo': '#C00000', // Hallazgo crítico
        'ambar-riesgo': '#FFC000', // Riesgo medio
        'verde-control': '#92D050', // Indicador positivo
        // --- Énfasis suaves ---
        'turquesa-claro': '#00BDB9',
        'azul-cielo': '#61CBF4',
        'verde-lima': '#C1FF72',
        lavanda: '#9999FF',
      },
      fontFamily: {
        // Display: Plus Jakarta Sans — títulos y CTAs
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Body: Inter — texto corrido
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escalas fluidas para titulares
        'fluid-sm': 'clamp(0.875rem, 0.83rem + 0.2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.25rem, 1.1rem + 0.6vw, 1.75rem)',
        'fluid-xl': 'clamp(1.75rem, 1.3rem + 2vw, 2.75rem)',
        'fluid-2xl': 'clamp(2.25rem, 1.5rem + 3.5vw, 4rem)',
      },
      boxShadow: {
        // Sombras suaves con tinte azul (cohesión cromática)
        soft: '0 4px 20px -2px rgba(0, 45, 86, 0.08)',
        'soft-lg': '0 12px 40px -8px rgba(0, 45, 86, 0.15)',
        glow: '0 0 30px -5px rgba(0, 176, 240, 0.45)',
        glowCoral: '0 0 30px -5px rgba(230, 108, 44, 0.45)',
      },
      backgroundImage: {
        // Gradientes recurrentes del sistema
        'grad-institu': 'linear-gradient(135deg, #002D56 0%, #0070C0 100%)',
        'grad-fluido': 'linear-gradient(135deg, #0070C0 0%, #00BDB9 100%)',
        'grad-energia': 'linear-gradient(135deg, #E66C2C 0%, #FFC000 100%)',
        'grad-aurora': 'linear-gradient(135deg, #7030A0 0%, #00B0F0 100%)',
        'mesh-base':
          'radial-gradient(at 20% 20%, rgba(0,112,192,0.10) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,176,240,0.10) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(108,184,63,0.08) 0px, transparent 50%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        // ===== Animaciones del sistema vivo =====
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'wave-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.2,0.6,0.3,1) infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
