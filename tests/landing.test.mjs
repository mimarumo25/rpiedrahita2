import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { servicios } from '../src/data/servicios.ts';
import { clientesDestacados, clientesPorServicio, testimonios } from '../src/data/clientes.ts';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('la salida pública contiene contenido real y todas las anclas resuelven', () => {
  const html = read('../dist/index.html');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'Identificadores duplicados');
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), target);
  assert.equal(servicios.length, 6);
  assert.equal(clientesDestacados.length, 8);
  assert.equal(clientesPorServicio.length, 5);
  assert.equal(clientesPorServicio.flatMap((grupo) => grupo.empresas).length, 49);
  for (const grupo of clientesPorServicio) for (const nombre of grupo.empresas) assert.ok(html.includes(nombre), nombre);
  for (const nombre of clientesDestacados) {
    assert.ok(html.includes(nombre), nombre);
    assert.ok(html.includes(`alt="Logotipo oficial de ${nombre}"`), `Logo de ${nombre}`);
  }
  assert.match(html, /clients-marquee-track[^>]*animate-marquee/);
  assert.match(html, /testimonials-grid/);
  assert.equal(testimonios.length, 6);
  for (const testimonio of testimonios) {
    assert.ok(html.includes(testimonio.cita), testimonio.empresa);
    assert.ok(html.includes(`alt="Logotipo oficial de ${testimonio.empresa}"`), `Logo de ${testimonio.empresa}`);
  }
  assert.match(html, /Política de Tratamiento de Datos Personales\./);
  assert.ok(html.includes('https://www.instagram.com/p/C7kjm7dRlBs/'), 'Enlace de Instagram');
  assert.ok(html.includes('https://www.facebook.com/rpiedrahitacontadores'), 'Enlace de Facebook');
  assert.ok(html.includes('/CALENDARIO_rp.pdf'), 'Enlace a Calendario Tributario');
  assert.ok(html.includes('/CARTILLA_RP.pdf'), 'Enlace a Cartilla Tributaria');
  assert.equal(existsSync(new URL('../dist/CALENDARIO_rp.pdf', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/CARTILLA_RP.pdf', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/indicadores.json', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/favicon.png', import.meta.url)), true);
  assert.match(html, /geo\.region" content="CO-ANT"/);
  assert.match(html, /OfferCatalog/);
  assert.equal(existsSync(new URL('../dist/robots.txt', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/sitemap.xml', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/llms.txt', import.meta.url)), true);
  assert.equal(existsSync(new URL('../dist/site.webmanifest', import.meta.url)), true);
  assert.doesNotMatch(html, /500\+|0 sanciones|gratis|gratuita|Construcol|AndesLogística/i);
  assert.match(html, /fetchpriority="high"/);
  assert.match(html, /srcset="[^"]+\.webp/);
  assert.match(html, /<noscript>/);
  assert.match(html, /og:image/);
  assert.equal(existsSync(new URL('../dist/laboratorio-fondos/index.html', import.meta.url)), false);
});

test('las siete rutas retiradas redirigen a la sección de servicios', () => {
  for (const path of ['servicios', ...servicios.map((servicio) => `servicios/${servicio.slug}`)]) {
    const html = read(`../dist/${path}/index.html`);
    assert.match(html, /http-equiv="refresh" content="0;url=\/#servicios"/);
    assert.match(html, /href="\/#servicios"/);
    assert.doesNotMatch(html, /<h1/);
  }
});

test('pausa, pestaña oculta y movimiento reducido detienen las partículas sin duplicar ciclos', () => {
  const preference = Object.assign(new EventTarget(), { matches: false });
  const label = { textContent: '' };
  const control = Object.assign(new EventTarget(), {
    hidden: true, disabled: false, title: '', attributes: {},
    querySelector: () => label,
    setAttribute(name, value) { this.attributes[name] = value; },
  });
  let width = 390;
  const context2d = Object.fromEntries(['setTransform', 'clearRect', 'beginPath', 'arc', 'fill', 'moveTo', 'lineTo', 'stroke'].map((name) => [name, () => {}]));
  const canvas = {
    dataset: {}, style: {},
    parentElement: { getBoundingClientRect: () => ({ width, height: 844 }) },
    getContext: () => context2d,
    getBoundingClientRect: () => ({ left: 0, top: 0 }),
  };
  const document = Object.assign(new EventTarget(), {
    hidden: false, readyState: 'complete', documentElement: { dataset: {} },
    querySelector: () => control,
    getElementById: () => canvas,
  });
  const window = Object.assign(new EventTarget(), { matchMedia: () => preference, devicePixelRatio: 1 });
  const frames = new Map();
  let frameId = 0;
  const sandbox = { document, window, Event,
    requestAnimationFrame: (callback) => { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame: (id) => frames.delete(id),
  };
  for (const component of ['MotionControl', 'ParticleNetwork']) {
    const script = read(`../src/components/${component}.astro`).match(/<script>([\s\S]*?)<\/script>/)[1];
    runInNewContext(stripTypeScriptTypes(script), sandbox);
  }
  assert.equal(frames.size, 1);
  assert.ok(Number(canvas.dataset.nodeCount) <= 28);
  control.dispatchEvent(new Event('click'));
  assert.equal(frames.size, 0);
  assert.equal(document.documentElement.dataset.motion, 'paused');
  assert.equal(canvas.dataset.running, 'false');
  document.hidden = true;
  document.dispatchEvent(new Event('visibilitychange'));
  document.hidden = false;
  document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(frames.size, 0, 'La pausa manual se conserva al regresar');
  control.dispatchEvent(new Event('click'));
  assert.equal(frames.size, 1);
  document.hidden = true;
  document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(frames.size, 0);
  document.hidden = false;
  document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(frames.size, 1);
  preference.matches = true;
  preference.dispatchEvent(new Event('change'));
  assert.equal(frames.size, 0);
  assert.equal(control.disabled, true);
  assert.equal(label.textContent, 'Movimiento reducido');
  width = 1440;
  window.dispatchEvent(new Event('resize'));
  assert.equal(frames.size, 0, 'Redimensionar no reactiva el movimiento');
  preference.matches = false;
  preference.dispatchEvent(new Event('change'));
  assert.equal(frames.size, 1);
  assert.equal(control.disabled, false);
});
