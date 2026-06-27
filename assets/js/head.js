/*
 * head.js — Fuente única de verdad para el <head> común de todas las páginas.
 *
 * Antes, cada .html repetía los mismos <meta> y <link> de CSS en su <head>
 * (y Font Awesome se cargaba dos veces: por CDN aquí y por @import en main.css).
 * Ahora cada página solo declara su <title> propio y carga este script:
 *
 *   <head>
 *     <meta charset="utf-8">
 *     <title>… título propio de la página …</title>
 *     <script src="assets/js/head.js"></script>
 *   </head>
 *
 * Font Awesome NO se enlaza aquí: ya viene del @import local dentro de main.css
 * (assets/css/font-awesome.min.css), evitando la doble carga.
 *
 * Se usa insertAdjacentHTML síncrono durante el parseo del <head>, así los
 * estilos se cargan temprano (sin parpadeo / FOUC).
 */
(function () {
  'use strict';

  var SITE_NAME = 'ONE Elevate Digital';
  var head = document.head;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function abs(path) { return new URL(path, location.href).href; }

  // --- Meta y hojas de estilo comunes ---
  head.insertAdjacentHTML('beforeend', [
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">',
    '<meta name="theme-color" content="#393D42">',
    '<link rel="stylesheet" href="assets/css/main.css">',
    '<link rel="stylesheet" href="assets/css/components.css">'
  ].join(''));

  // --- SEO derivado del <title> y la <meta description> propios de la página ---
  var title = document.title || SITE_NAME;
  var descEl = document.querySelector('meta[name="description"]');
  var desc = descEl ? descEl.getAttribute('content') : '';
  var canonical = location.origin + location.pathname;
  var image = abs('images/AIRed2.png');

  var seo = [
    '<link rel="canonical" href="' + esc(canonical) + '">',
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="' + esc(SITE_NAME) + '">',
    '<meta property="og:title" content="' + esc(title) + '">',
    '<meta property="og:url" content="' + esc(canonical) + '">',
    '<meta property="og:image" content="' + esc(image) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(title) + '">',
    '<meta name="twitter:image" content="' + esc(image) + '">'
  ];
  if (desc) {
    seo.push('<meta property="og:description" content="' + esc(desc) + '">');
    seo.push('<meta name="twitter:description" content="' + esc(desc) + '">');
  }
  head.insertAdjacentHTML('beforeend', seo.join(''));

  // --- Datos estructurados (JSON-LD): Organización ---
  var org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: location.origin + location.pathname.replace(/[^/]*$/, ''),
    logo: image,
    description: desc || 'Diseño y desarrollo de soluciones digitales potenciadas con inteligencia artificial.'
  };
  var ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify(org);
  head.appendChild(ld);
})();
