# Mapeo de temas del curso

Esta es la parte "oficial" del proyecto: dónde encontrar cada tema del programa y, sobre todo, por qué lo resolví de esa forma. No quería dejar solo una tabla fría, así que después de cada punto agrego el razonamiento — es lo que explicaría si me preguntaran en la sustentación.

---

### 1. Diseño responsivo

**Dónde está:** en todo el sitio, pero se nota más en la navbar (se convierte en menú hamburguesa bajo los 768px) y en la estación 01, justo debajo del hero, donde lo explico directamente.

**Por qué así:** en vez de hacer una sección "de responsive" aislada, preferí que el propio comportamiento del sitio fuera la prueba. La tipografía del hero usa `clamp()` para no depender de un breakpoint fijo, y el grid de cápsulas colapsa a una columna en tablet. Si algo no se viera bien en el teléfono del profesor, ahí se nota inmediatamente que falló — así que preferí resolverlo de raíz en vez de "maquillarlo".

### 2. Flexbox

**Dónde está:** el hero completo (`station-hero`), la navbar, y los mixins `flex-center()` que reutilizo en varias secciones.

**Por qué así:** Flexbox lo usé para todo lo que es alineación de una sola dirección — centrar el hero vertical y horizontalmente, alinear los ítems del menú. Es la herramienta correcta para eso, y por lo mismo no la fuerzo donde en realidad necesito una cuadrícula de dos dimensiones (ahí entra Grid).

### 3. Grid Layout

**Dónde está:** estación 02, "Estación Modular", con las cápsulas de la nave.

**Por qué así:** quería un caso donde Grid realmente brille frente a Flexbox: por eso usé `grid-template-areas` con nombres (`cmd`, `hab`, `lab`, `dock`, `solar`) en vez de solo `grid-template-columns` numérico. Es más legible y deja clarísimo, con solo mirar el CSS, qué bloque va dónde — como el plano de una nave real.

### 4. Preprocesadores CSS (concepto general)

**Dónde está:** en todo `src/scss/` y `src/less/`, pero conceptualmente lo presento en la estación 03 antes de entrar en SASS específicamente.

**Por qué así:** antes de mostrar SASS o LESS por separado, quería que quedara claro *para qué sirve* un preprocesador en general: variables, anidamiento, reutilización de código. Todo el sitio deriva sus colores de `_variables.scss`, así que si cambio `$nebula-violet` una sola vez, se actualiza en cinco lugares distintos. Esa es la prueba de que el preprocesador no es solo sintaxis nueva, sino una forma más sana de mantener CSS grande.

### 5. LESS

**Dónde está:** estación 04, "Cinturón de asteroides" — el comparador directo con SASS.

**Por qué así:** en vez de usar LESS en una sección sin relación con nada más, hice exactamente el mismo botón que en la estación SASS, pero escrito con la sintaxis de LESS (`@variable`, mixins llamados como si fueran clases). Así la comparación no es teórica, es un ejemplo del mismo componente resuelto dos veces.

### 6. SASS

**Dónde está:** estación 03, "Nebulosa", y en realidad en la mayoría del `main.scss`.

**Por qué así:** esta es la estación donde más "presumo" las ventajas de SASS frente a LESS: uso `@each` para generar clases de utilidad en bloque (`.text-violet`, `.bg-violet`, etc.), `@for` para posicionar las estrellas del fondo sin escribirlas una por una, y una función propia (`tone()`) construida sobre el módulo `sass:math`. Ninguna de esas tres cosas tiene un equivalente igual de directo en LESS, así que era el lugar perfecto para mostrarlas.

### 7. Animaciones CSS

**Dónde está:** el título del hero (aparece con un `@keyframes rise`), la cuenta regresiva que pulsa, el campo de estrellas que titila (`twinkle`), y los anillos del agujero de gusano.

**Por qué así:** quise que ninguna animación fuera gratuita — cada una refuerza la idea de "estamos en movimiento, en el espacio". Evité poner animaciones decorativas sin motivo, porque eso es justo lo que hace que un sitio se sienta genérico.

### 8. Transiciones y transformaciones CSS

**Dónde está:** estación 05, "Agujero de gusano", con los anillos en 3D (`rotateX`, `rotateY`, `scale`, `perspective`), y también en los hovers de los botones y tarjetas por todo el sitio (`translateY`, `scale`).

**Por qué así:** separé conceptualmente transición (algo que cambia suavemente, como el hover de un botón) de transformación (un cambio geométrico, como rotar en 3D). El agujero de gusano es el ejemplo más "puro" de transformación porque usa `perspective` y ejes 3D, algo que no aparece en ningún otro lado del sitio.

### 9. Compatibilidad entre navegadores

**Dónde está:** de forma transversal — prefijos `-webkit-backdrop-filter`, un `@supports not (backdrop-filter...)` como fallback, respeto por `prefers-reduced-motion`, y de forma interactiva en el footer con el selector de "universos" (oscuro / claro / alto contraste).

**Por qué así:** no quería que este tema fuera solo una lista de prefijos en un comentario que nadie lee. Al convertirlo en un botón que el usuario puede tocar, se puede *demostrar* en vivo durante la sustentación que el sitio responde bien a distintos contextos, en vez de solo asegurar que "debería funcionar en Firefox".

### 10. Frameworks CSS (concepto general)

**Dónde está:** estaciones 07 y 08, puestas una justo después de la otra a propósito.

**Por qué así:** antes de mostrar Bootstrap y Tailwind por separado, la idea es que se perciba la diferencia de filosofía entre "framework de componentes" y "framework de utilidades" con solo pasar de una sección a la siguiente.

### 11. Bootstrap

**Dónde está:** estación 07, "Base Bootstrap" — grid de 12 columnas, cards, badges y un modal funcional.

**Por qué así:** elegí específicamente el modal porque es un componente que normalmente requiere bastante JavaScript propio para manejar apertura/cierre, overlay, accesibilidad — y Bootstrap lo resuelve con un par de atributos `data-bs-*`. Es el ejemplo más claro de "esto es lo que ganas al usar un framework de componentes".

### 12. Tailwind CSS

**Dónde está:** estación 08, "Frontera Tailwind" — tres tarjetas construidas 100% con clases de utilidad.

**Por qué así:** a propósito no usé ni una línea de CSS personalizado en esta sección (más allá de una fuente), para que quedara clarísimo que todo el diseño vive en las clases del HTML. Es el contraste más honesto que puedo mostrar frente a Bootstrap.

### 13. Material Design

**Dónde está:** estación 06, "Colonia Material" — las tarjetas con elevación (sombra en dos capas) y el efecto ripple en el botón.

**Por qué así:** Material Design es un *lenguaje visual*, no una librería, así que aquí me enfoqué en los principios (elevación, movimiento con propósito, superficies) más que en un componente específico. El ripple lo armé con una combinación de CSS (`@keyframes ripple`) y un poquito de JS que solo calcula dónde hiciste clic — el efecto visual en sí es 100% CSS.

### 14. Materialize

**Dónde está:** también en la estación 06 — el input con floating label y el botón `waves-effect` son componentes reales de la librería Materialize, no una imitación mía.

**Por qué así:** quería que quedara clara la diferencia entre "Material Design" (el concepto/estilo) y "Materialize" (una librería concreta que lo implementa), así que puse ambos en la misma estación pero usando explícitamente clases de Materialize (`input-field`, `waves-effect`) junto a mis propias tarjetas inspiradas en el mismo lenguaje visual.

---

## Una nota final sobre las decisiones de diseño

Si algo quiero que se note al revisar esto, es que ningún tema quedó "de relleno". Antes de escribir código, para cada tema me pregunté: ¿qué estación de un viaje espacial necesitaría exactamente esta herramienta? Esa pregunta es la que terminó definiendo el orden y el contenido de las diez estaciones, más que la lista de temas en sí.
