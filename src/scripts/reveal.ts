/**
 * Scroll Reveal — utilidad de animación al entrar en viewport.
 *
 * Implementación minimalista con IntersectionObserver, sin dependencias.
 * Reemplaza a librerías como AOS pero con huella cercana a cero.
 *
 * Uso: añadir atributos a cualquier elemento:
 *   data-reveal              → anima al entrar
 *   data-reveal="left"       → entra desde la izquierda
 *   data-reveal="right"      → entra desde la derecha
 *   data-reveal="up"         → entra desde abajo (por defecto)
 *   data-reveal="zoom"       → entra con escala
 *   data-reveal-delay="150"  → retardo en ms
 *
 * Respeta prefers-reduced-motion: si está activo, muestra sin animar.
 */

type Direction = 'up' | 'left' | 'right' | 'zoom';

const HIDDEN: Record<Direction, string> = {
  up: 'opacity:0;transform:translateY(32px);',
  left: 'opacity:0;transform:translateX(-32px);',
  right: 'opacity:0;transform:translateX(32px);',
  zoom: 'opacity:0;transform:scale(0.92);',
};
const VISIBLE = 'opacity:1;transform:none;';

export function initReveal(): void {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (reduceMotion) {
    els.forEach((el) => {
      el.style.cssText = VISIBLE;
      el.setAttribute('data-reveal-done', 'true');
    });
    return;
  }

  // Estado inicial oculto
  els.forEach((el) => {
    const dir = (el.dataset.reveal as Direction) || 'up';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.2,0.7,0.3,1)';
    el.style.willChange = 'opacity, transform';
    el.style.cssText += HIDDEN[dir];
    if (el.dataset.revealDelay) {
      el.style.transitionDelay = `${el.dataset.revealDelay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.cssText = el.style.cssText.replace(HIDDEN[(el.dataset.reveal as Direction) || 'up'], '') + VISIBLE;
          el.setAttribute('data-reveal-done', 'true');
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  els.forEach((el) => observer.observe(el));
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
}
