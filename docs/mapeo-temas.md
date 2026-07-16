# Mapeo de Temas por Semana – Proyecto Final CSS Avanzado

**GEOMUNDO Z** – Portal de noticias globales

---

## Unidad 1: Diseño Responsivo

| Semana | Sesión | Tema | Evidencia en el proyecto |
|--------|--------|------|--------------------------|
| 1      | 1      | Introducción al diseño responsivo (viewport, media queries, multimedia responsiva, texto responsivo) | `meta viewport` en todos los HTML; uso de `clamp()` y `vw` para tamaños de fuente; imágenes con `max-width: 100%` y `object-fit`. |
| 2      | 2      | Flexbox (contenedores, elementos, diseño responsivo) | Navbar con `display: flex`, `justify-content: space-between`, `align-items: center`. Menú hamburguesa con toggle. |
| 3      | 3      | Grid Layout (grid, grid-area, grid-row, grid-column) | Sección de Tecnología (`#tech`) con `display: grid` y áreas definidas: `headline`, `second`, `sidebar`, `dock`, `banner`. |
| 4      | 4      | Evaluación Práctica 1 | N/A (evaluación) |

---

## Unidad 2: SASS y LESS

| Semana | Sesión | Tema | Evidencia en el proyecto |
|--------|--------|------|--------------------------|
| 5      | 5      | Preprocesadores CSS (tipos, configuración, ventajas) | Uso de LESS y SASS en el proyecto; archivos fuente en `src/less/` y `src/scss/`. |
| 6      | 6      | LESS (instalación, sintaxis, aplicaciones) | Archivos LESS con variables (`_variables.less`), mixins (`_mixins.less`), anidamiento, operaciones (`@bp-tablet`) y partials. Compilado a `dist/asteroides.css`. |
| 7      | 7      | SASS (instalación, sintaxis, aplicaciones) | Archivos SASS con variables (`_variables.scss`), mixins (`_mixins.scss`), anidamiento, funciones (`tone()`), estructuras `@for` y `@each`. Compilado a `dist/main.css`. |
| 8      | 8      | Evaluación Práctica 2 | N/A (evaluación) |

---

## Unidad 3: Animaciones CSS

| Semana | Sesión | Tema | Evidencia en el proyecto |
|--------|--------|------|--------------------------|
| 9      | 9      | Animaciones web (tipos, propiedades, aplicaciones) | Página `animations.html` con demostraciones de `@keyframes`: `float`, `pulse`, `slideIn`, `rotate3d`, `bounce`. También barra de progreso animada y `live-counter` con `pulse`. |
| 10     | 10     | Transiciones y transformaciones (conceptos, propiedades) | Efectos `hover` en tarjetas (`transform: translateY(-6px)`), botones (`scale(1.02)`), imágenes (`scale(1.05)`). Transformaciones 3D en el radar (`rotateX`, `rotateY`). |
| 11     | 11     | Compatibilidad entre navegadores | Uso de `@supports` para `backdrop-filter`; `prefers-reduced-motion` para accesibilidad; prefijos `-webkit-` para `backdrop-filter` y `background-clip`. |
| 12     | 12     | Evaluación Práctica 3 | N/A (evaluación) |

---

## Unidad 4: Extensiones con Frameworks

| Semana | Sesión | Tema | Evidencia en el proyecto |
|--------|--------|------|--------------------------|
| 13     | 13     | Frameworks CSS (definición, tipos, ventajas) | Uso de Bootstrap 5, Tailwind CSS, Materialize CSS (todos vía CDN nativo). |
| 14     | 14     | Bootstrap (definición, ventajas, usos) | Página `bootstrap-demo.html` con navbar, grid, cards, carrusel, acordeón, modal, badges, botones. También sección `#economia` en `index.html` usando `row`, `col-md-6`, `card`. |
| 15     | 15     | Tailwind CSS (definición, ventajas, usos) | Página `tailwind.html` con navbar, grid de tarjetas, formulario, badges, clases responsivas (`md:flex`, `lg:grid`). También sección `#tailwind` en `index.html`. |
| 16     | 16     | Material Design (definición, ventajas, usos) | Integración de Material Icons en `materialize.html` y en `index.html` (sección de opinión con efecto ripple). |
| 17     | 17     | Materialize (definición, ventajas, usos) | Página `materialize.html` con navbar, tabs, parallax, cards, botones flotantes, barra de progreso, iconos Material. |
| 18     | 18     | Evaluación Examen Final | Proyecto integrador con todas las tecnologías, documentación y sustentación. |

---

## Resumen de Tecnologías y Ubicación

| Tecnología | Archivos / Ubicación |
|------------|----------------------|
| **LESS**   | `src/less/asteroides.less` y partials (`_variables.less`, `_mixins.less`, `_animaciones.less`, `_componentes.less`) → compilado a `dist/asteroides.css`. |
| **SASS**   | `src/scss/main.scss` y partials (`_variables.scss`, `_mixins.scss`, `_nebulosa.scss`, `_componentes.scss`) → compilado a `dist/main.css`. |
| **Bootstrap 5** | `bootstrap-demo.html` y sección `#economia` en `index.html`. CDN nativo. |
| **Tailwind CSS** | `tailwind.html` y sección `#tailwind` en `index.html`. CDN nativo. |
| **Materialize + Material Icons** | `materialize.html` y sección `#opinion` en `index.html`. CDN nativo. |
| **Animaciones CSS** | `animations.html`; mixins y clases en LESS y SASS. |
| **JavaScript** | `scroll-progress.js` (barra de progreso, menú, modos, diagnóstico, ripple, frameworks). |

---

## Sustentación – Roles sugeridos por integrante

| Integrante | Responsabilidad |
|------------|-----------------|
| **Integrante 1** | LESS y SASS (variables, mixins, compilación, partials) |
| **Integrante 2** | Animaciones, transiciones y transformaciones (keyframes, hover effects, 3D) |
| **Integrante 3** | Frameworks (Bootstrap, Tailwind, Materialize) y compatibilidad |
| **Integrante 4** (opcional) | Documentación, README, capturas y presentación |

---

*Última actualización: Julio 2026 – Proyecto Final CSS Avanzado, Semana 18.*