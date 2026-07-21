# GEOMUNDO Z – Proyecto Frontend con Tailwind CSS, SASS y LESS

## 1. Descripción General

GEOMUNDO Z es un portal web temático orientado a noticias, geopolítica, tecnología y eventos mundiales. El proyecto fue desarrollado con el objetivo de aplicar tecnologías modernas de estilos web mediante el uso de **Tailwind CSS**, **SASS (SCSS)** y **LESS**, implementando metodologías de organización modular, reutilización de código, diseño responsivo y optimización del mantenimiento de estilos.

El sistema integra componentes visuales avanzados, animaciones, diseño adaptable a diferentes dispositivos y una arquitectura basada en preprocesadores CSS.

---

# 2. Tecnologías Utilizadas

| Tecnología   | Versión        | Propósito               |
| ------------ | -------------- | ----------------------- |
| HTML5        | Estándar       | Estructura del sitio    |
| CSS3         | Estándar       | Estilos base            |
| Tailwind CSS | CDN            | Framework Utility-First |
| SASS (SCSS)  | Última estable | Preprocesador CSS       |
| LESS         | Última estable | Preprocesador CSS       |
| JavaScript   | ES6            | Interactividad          |
| Google Fonts | Web Fonts      | Tipografía              |

---

# 3. Instrucciones de Instalación y Ejecución

## Requisitos Previos

* Navegador moderno (Chrome, Edge, Firefox)
* Visual Studio Code (recomendado)
* Extensión Live Server
* Node.js (opcional para compilación local)

---

## Ejecución del Proyecto

### Método 1: Live Server

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Instalar la extensión Live Server.
3. Hacer clic derecho sobre:

```text
index.html
```

4. Seleccionar:

```text
Open with Live Server
```

5. El sitio se abrirá automáticamente en el navegador.

---

### Método 2: Compilación SASS

Instalar SASS:

```bash
npm install -g sass
```

Compilar:

```bash
sass scss/main.scss css/main.css
```

Modo observador:

```bash
sass --watch scss/main.scss:css/main.css
```

---

### Método 3: Compilación LESS

Instalar LESS:

```bash
npm install -g less
```

Compilar:

```bash
lessc less/asteroides.less css/asteroides.css
```

Modo observador:

```bash
less-watch-compiler less css
```

---

# 4. Estructura del Proyecto

```text
GEOMUNDO-Z/
│
├── index.html
├── tailwind.html
│
├── css/
│   ├── main.css
│   └── asteroides.css
│
├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _componentes.scss
│   └── _nebulosa.scss
│
├── less/
│   ├── asteroides.less
│   ├── _variables.less
│   ├── _mixins.less
│   ├── _animaciones.less
│   └── _componentes.less
│
│
└── README.md
```

---

# 5. Arquitectura Implementada

El proyecto utiliza tres enfoques complementarios:

### Tailwind CSS

* Utility First Design
* Responsive Design
* Grid System
* Flexbox
* Hover States
* Gradientes
* Componentes rápidos

### SASS (SCSS)

* Variables
* Mixins
* Funciones
* Operaciones matemáticas
* Bucles @for
* Iteraciones @each
* Organización modular mediante partials

### LESS

* Variables
* Mixins parametrizados
* Funciones
* Operaciones de color
* Animaciones reutilizables
* Arquitectura modular

---

# 6. Roles del Equipo

## Integrante Principal

**Leonardo Quispe Z.**

Responsabilidades:

* Diseño de interfaz
* Desarrollo HTML
* Implementación Tailwind CSS
* Desarrollo SASS (SCSS)
* Desarrollo LESS
* Responsive Design
* Documentación técnica
* Pruebas y validación

---

# 7. Fuentes Consultadas

## Documentación Oficial

* Tailwind CSS Documentation
* SASS Official Documentation
* LESS Official Documentation
* MDN Web Docs
* W3Schools
* Google Fonts

## Recursos Académicos

* Material del curso de Desarrollo Web
* Guías de CSS Responsive Design
* Documentación sobre Preprocesadores CSS

---

# 8. Características Implementadas

## Tailwind CSS

✔ Navbar responsiva

✔ Grid adaptable

✔ Tarjetas dinámicas

✔ Gradientes personalizados

✔ Breakpoints responsivos

✔ Efectos Hover

---

## SASS

✔ Variables globales

✔ Mixins reutilizables

✔ Funciones personalizadas

✔ @for

✔ @each

✔ Responsive Design

✔ Flexbox

✔ CSS Grid

✔ Accesibilidad

---

## LESS

✔ Variables

✔ Mixins

✔ Funciones

✔ Operaciones matemáticas

✔ Operaciones de color

✔ Animaciones

✔ Componentes reutilizables

✔ Media Queries

---


# 9. Evidencias de Cumplimiento de la Rúbrica

| Requisito         | Evidencia                            |
| ----------------- | ------------------------------------ |
| Tailwind CSS      | tailwind.html                        |
| Variables SASS    | _variables.scss                      |
| Mixins SASS       | _mixins.scss                         |
| Funciones SASS    | tone()                               |
| @for              | staggered-stars()                    |
| @each             | generate-accent-classes()            |
| Variables LESS    | _variables.less                      |
| Mixins LESS       | _mixins.less                         |
| Funciones LESS    | tone()                               |
| Operaciones LESS  | darken(), mix()                      |
| Responsive Design | Media Queries + Tailwind Breakpoints |
| Flexbox           | Navbar y mixins                      |
| CSS Grid          | News Grid y Compare Grid             |
| Modularización    | Partials SASS y LESS                 |
| Compilación CSS   | main.css y asteroides.css            |
| Accesibilidad     | prefers-reduced-motion               |

---

# 10. Conclusiones

El proyecto GEOMUNDO Z permitió aplicar de forma práctica los conceptos de desarrollo frontend moderno mediante la integración de Tailwind CSS, SASS y LESS. La implementación de variables, mixins, funciones, operaciones, iteraciones, animaciones y diseño responsivo contribuyó a construir una arquitectura escalable, mantenible y alineada con buenas prácticas de desarrollo web profesional.

El resultado final demuestra el dominio de herramientas de estilización avanzadas y el cumplimiento de los objetivos académicos planteados en la rúbrica de evaluación.
