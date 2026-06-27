# ONE Elevate Digital

Sitio web estático de marketing/landing en español para la marca **ONE Elevate Digital** (by Pinha's AI Solutions). El sitio presenta los servicios de la agencia, casos de éxito, artículos sobre inteligencia artificial (AI) y un formulario para que los clientes creen y coticen su proyecto web. Está construido como un sitio completamente estático (HTML, CSS y JavaScript), sin backend ni sistema de compilación, sobre una plantilla de estilo HTML5 UP.

## Características / Secciones principales

- **Home con banner/slider** (`index.html`): página principal con un slider de imágenes a pantalla completa y mensajes destacados de la marca.
- **Casos de éxito**: sección que invita a conocer proyectos destacados (enlaza al portafolio).
- **Crear proyecto** (`crear-proyecto.html`): formulario multi-paso para que el cliente personalice y solicite una cotización de su sitio web.
- **Artículos sobre AI**: tres artículos informativos sobre inteligencia artificial:
  - `articulo-ai-cambia-vida.html` — Cómo la AI puede cambiar tu vida y tu negocio.
  - `articulo-ai-funciona.html` — Cómo funciona la AI por detrás.
  - `articulo-ai-potenciar-negocio.html` — Cómo potenciar tu negocio con AI.
- **Sección de servicios con submenú desplegable**: en la navegación, el menú "NUESTROS SERVICIOS" despliega un submenú con Desarrollo de Software, Diseño, Marketing Solutions, Ciberseguridad, Capacitaciones Tech y Servicios Financieros.
- **Sobre nosotros / Portafolio**: páginas de información (`generic.html`) y de portafolio en construcción (`mantenimiento.html`).
- **Aviso de privacidad** (`aviso-privacidad.html`): página con el aviso de privacidad de la marca.

## Estructura del proyecto

```
ONE-Elevate/
├── index.html                          # Página principal (banner/slider, casos de éxito, crear proyecto, artículos AI)
├── crear-proyecto.html                 # Formulario multi-paso para cotizar un proyecto
├── generic.html                        # Página "Sobre nosotros" / contenido genérico
├── mantenimiento.html                  # Portafolio (página en mantenimiento)
├── aviso-privacidad.html               # Aviso de privacidad
├── articulo-ai-cambia-vida.html        # Artículo sobre AI
├── articulo-ai-funciona.html           # Artículo sobre AI
├── articulo-ai-potenciar-negocio.html  # Artículo sobre AI
├── assets/
│   ├── css/
│   │   ├── main.css                    # Hoja de estilos principal (plantilla)
│   │   └── font-awesome.min.css        # Estilos de Font Awesome
│   ├── js/
│   │   ├── jquery.min.js               # jQuery
│   │   ├── jquery.scrollex.min.js      # Plugin scrollex
│   │   ├── skel.min.js                 # Framework skel (responsive)
│   │   ├── util.js                     # Utilidades de la plantilla
│   │   └── main.js                     # Scripts principales del sitio
│   └── fonts/                          # Fuentes de Font Awesome (otf, eot, svg, ttf, woff, woff2)
├── images/                             # Imágenes del sitio (slides, fotos, gráficos)
└── README.md                           # Este archivo
```

## Tecnologías usadas

- **HTML5** — estructura y contenido de las páginas.
- **CSS3** — estilos (`assets/css/main.css`).
- **JavaScript** — interactividad (por ejemplo, el submenú desplegable de servicios y el formulario multi-paso).
- **jQuery** — manipulación del DOM y soporte de plugins.
- **Plantilla basada en HTML5 UP / skel** — la maquetación responsive utiliza el framework **skel** junto con el plugin **scrollex**, propios de las plantillas de [HTML5 UP](https://html5up.net/).
- **Font Awesome** — iconografía (incluida localmente en `assets/fonts/` y también referenciada vía CDN).
- **Google Fonts (Poppins)** — tipografía cargada desde Google Fonts.

## Cómo ejecutar localmente

Al ser un sitio estático, no requiere instalación ni proceso de compilación. Hay dos opciones:

1. **Abrir directamente el archivo**: abre `index.html` en tu navegador (doble clic o arrastrándolo a la ventana del navegador).

2. **Servirlo con un servidor local** (recomendado para que todas las rutas funcionen correctamente):

   ```bash
   python3 -m http.server
   ```

   Luego abre `http://localhost:8000` en tu navegador.

## Despliegue

El sitio está pensado para desplegarse en **GitHub Pages**. La versión publicada se encuentra en:

> https://cesarpinha.github.io/ONE-Elevate

Para actualizar el sitio, basta con hacer push de los cambios a la rama configurada en GitHub Pages; GitHub se encarga de publicar los archivos estáticos automáticamente.

## Créditos

- Maquetación basada en una plantilla de [HTML5 UP](https://html5up.net/) (framework **skel**), distribuida bajo licencia Creative Commons.
- Marca, contenido y personalización: **ONE Elevate Digital** (by Pinha's AI Solutions).
