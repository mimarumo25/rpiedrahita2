/** El contenido es visible por defecto, incluso sin JavaScript. */
export function initReveal(): void {
  if (!('IntersectionObserver' in window)) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const observer = new IntersectionObserver((entries, current) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      if (!preference.matches && document.documentElement.dataset.motion !== 'paused') {
        element.animate(
          [{ transform: 'translateY(14px)', opacity: 0.85 }, { transform: 'none', opacity: 1 }],
          { duration: 550, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)' },
        );
      }
      element.dataset.revealDone = 'true';
      current.unobserve(element);
    }
  }, { threshold: 0.06 });
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => observer.observe(element));
}
initReveal();
