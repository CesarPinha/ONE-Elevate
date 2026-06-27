/*
 * layout.js — Fuente única de verdad para el layout del sitio.
 *
 * Inyecta el header, la navegación (con el submenú de servicios unificado) y el
 * footer en cada página, conecta el toggle del submenú y carga los scripts de la
 * plantilla en orden. Antes todo esto estaba copiado y divergiendo en cada .html.
 *
 * Uso en cada página:
 *   <body>
 *     <div id="site-header"></div>   <!-- header + nav se inyectan aquí -->
 *     ...contenido propio de la página...
 *     <div id="site-footer"></div>   <!-- footer se inyecta aquí -->
 *     <script src="assets/js/layout.js"></script>  <!-- al final del body -->
 *   </body>
 *
 * El header usa la clase "alt" automáticamente cuando la página tiene un banner.
 */
(function () {
  'use strict';

  function headerHTML() {
    // "alt" = header transparente sobre un banner (home y artículos).
    var alt = document.querySelector('.banner') ? ' class="alt"' : '';
    return '' +
      '<a class="skip-link" href="#contenido">Saltar al contenido</a>' +
      '<header id="header"' + alt + '>' +
        '<div class="logo"><a href="index.html">ONE Elevate <span>by Pinha\'s AI Solutions</span></a></div>' +
        '<a href="#menu">Menu</a>' +
      '</header>';
  }

  function navHTML() {
    return '' +
      '<nav id="menu" aria-label="Navegación principal"><ul class="links">' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="mantenimiento.html">Portafolio</a></li>' +
        '<li><a href="generic.html">Sobre nosotros</a></li>' +
        '<li class="has-submenu">' +
          '<a href="#" id="servicios-toggle" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="servicios-submenu">NUESTROS SERVICIOS <i class="fa fa-caret-down" aria-hidden="true"></i></a>' +
          '<ul class="submenu" id="servicios-submenu" style="display:none;" aria-hidden="true">' +
            '<li><a href="desarrollo-de-software.html">DESARROLLO DE SOFTWARE</a></li>' +
            '<li><a href="#">DISEÑO</a></li>' +
            '<li><a href="#">MARKETING SOLUTIONS</a></li>' +
            '<li><a href="#">CIBERSEGURIDAD</a></li>' +
            '<li><a href="#">CAPACITACIONES TECH</a></li>' +
            '<li><a href="mantenimiento.html">SERVICIOS FINANCIEROS</a></li>' +
          '</ul>' +
        '</li>' +
      '</ul></nav>';
  }

  function footerHTML() {
    return '' +
      '<footer id="footer"><div class="container">' +
        '<ul class="icons">' +
          '<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>' +
          '<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>' +
          '<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>' +
          '<li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>' +
        '</ul>' +
        '<p style="margin-top:1em;font-size:0.9em;"><a href="aviso-privacidad.html" style="color:#F0F2F5;">Aviso de privacidad</a></p>' +
        '<p class="copyright">Made by <a href="index.html">ONE Elevate Digital</a>.</p>' +
      '</div></footer>';
  }

  // Sustituye un placeholder por su contenido real, dejando los elementos
  // (#header, #menu, #footer) como hijos directos de <body>, igual que antes.
  function replacePlaceholder(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  // Conecta el desplegable del submenú "NUESTROS SERVICIOS".
  function wireSubmenu() {
    var toggle = document.getElementById('servicios-toggle');
    var submenu = document.getElementById('servicios-submenu');
    if (!toggle || !submenu) return;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var willOpen = submenu.style.display === 'none' || submenu.style.display === '';
      submenu.style.display = willOpen ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      submenu.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
    });
  }

  // Marca el primer bloque de contenido como destino del enlace "Saltar al
  // contenido" y como landmark principal para lectores de pantalla.
  function markMainContent() {
    var main = document.querySelector('body > section:not(.banner)') ||
               document.querySelector('body > section');
    if (!main) return;
    if (!main.id) main.id = 'contenido';
    main.setAttribute('role', 'main');
    main.setAttribute('tabindex', '-1');
  }

  // Carga los scripts de la plantilla en orden (async=false preserva el orden).
  function loadTemplateScripts() {
    var srcs = [
      'assets/js/jquery.min.js',
      'assets/js/jquery.scrollex.min.js',
      'assets/js/skel.min.js',
      'assets/js/util.js',
      'assets/js/main.js'
    ];
    srcs.forEach(function (src) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
    });
  }

  function init() {
    replacePlaceholder('site-header', headerHTML() + navHTML());
    replacePlaceholder('site-footer', footerHTML());
    markMainContent();
    wireSubmenu();
    loadTemplateScripts();
  }

  init();
})();
