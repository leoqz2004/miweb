# CSS Odyssey 🚀

Un viaje interactivo de una sola página por las distintas eras y herramientas del diseño web moderno. En vez de hacer un portafolio genérico con secciones sueltas, decidí construir algo con hilo narrativo: cada "estación" del viaje espacial representa un tema del curso, y la estética de esa estación cambia según la tecnología que estoy demostrando ahí.

## ¿Por qué este enfoque?

Cuando empecé a planear el proyecto, mi primera idea fue la típica: una landing page con un montón de secciones donde voy metiendo "aquí Grid, aquí Flexbox, aquí Bootstrap". Funciona, pero se siente como una lista de tareas marcadas, no como un proyecto real. Así que le di una vuelta y pensé: ¿qué pasa si en vez de simplemente *aplicar* cada tecnología, el usuario *nota* la diferencia al pasar de una sección a otra? Por eso cada estación tiene su propia paleta, su propio ritmo de animación y hasta su propia "textura" visual.

El resultado es que el sitio se navega como si fuera un scroll a través de distintos "mundos": la plataforma de lanzamiento, una estación modular, una nebulosa morada, un cinturón de asteroides, un agujero de gusano, una colonia futurista y, al final, un centro de control donde puedes cambiar entre universos (temas visuales).

## Cómo está organizado el código

```
css-odyssey/
├── index.html              → todo el sitio, una sola página
├── src/
│   ├── scss/                → el código fuente en SASS (sin compilar)
│   │   ├── _variables.scss  → paleta, tipografía, espaciados
│   │   ├── _mixins.scss     → mixins, funciones y bucles reutilizables
│   │   ├── _nebulosa.scss   → la estación 3, con nesting y @each/@for
│   │   └── main.scss        → junta todo y define el resto de secciones
│   └── less/
│       └── asteroides.less  → el mismo botón/tarjeta de la estación SASS, pero en LESS
├── dist/
│   ├── main.css              → resultado compilado de main.scss
│   └── asteroides.css        → resultado compilado de asteroides.less
├── js/
│   └── scroll-progress.js    → JS mínimo: barra de combustible, menú, ripple, toggles
└── docs/
    └── mapeo-temas.md        → tabla detallada de qué tema cubre cada sección
```

Una nota honesta: normalmente compilaría el SASS y el LESS con las herramientas de línea de comandos (`sass` y `lessc`), pero en el entorno donde armé esta entrega no tenía acceso a internet para instalarlas. Así que escribí el código fuente completo en `.scss` y `.less` (con nesting, mixins, funciones, variables — todo lo que pediría un compilador real), y luego "compilé a mano" ese mismo código para generar el CSS final en `dist/`. Si abres `src/scss/main.scss` vas a ver exactamente el mismo código que terminó en `dist/main.css`, solo que en su forma sin procesar. Si tienes Node instalado, puedes regenerarlo tú mismo con:

```bash
npm install -g sass less
sass src/scss/main.scss dist/main.css
lessc src/less/asteroides.less dist/asteroides.css
```

## Qué encontrarás en cada estación

Para no repetir aquí lo mismo, dejé el detalle punto por punto en [`docs/mapeo-temas.md`](docs/mapeo-temas.md) — ahí explico, estación por estación, qué tema del curso demuestra y por qué elegí resolverlo de esa manera y no de otra.

## Algunas decisiones que quiero explicar

**La barra de combustible lateral.** No es solo decoración: mide cuánto has scrolleado y mueve un "cohete" a lo largo de la barra. La hice porque quería un elemento que amarrara visualmente todo el recorrido, algo que estuviera presente en las diez estaciones y le diera identidad al proyecto completo, en vez de que cada sección se sintiera aislada.

**Por qué comparo SASS y LESS directamente.** En vez de usar cada preprocesador en una sección separada sin relación entre sí, hice el mismo componente (un botón con hover) dos veces: una vez en SASS y otra en LESS, con el código fuente visible en tarjetas de comparación. Me parece que así se entiende mejor la diferencia real entre ambos (la sintaxis de variables, cómo se llaman los mixins, etc.) que si solo dijera "aquí usé LESS" sin punto de comparación.

**Por qué Bootstrap y Tailwind están uno al lado del otro.** Es la misma lógica: ponerlos en secciones consecutivas invita a compararlos directamente. Bootstrap resuelve todo con componentes ya armados (cards, modal, badges); Tailwind te da piezas sueltas para que arm tú el diseño. Quería que esa diferencia de filosofía se notara en el propio código, no solo que la explicara en un párrafo.

**El modo diagnóstico.** Es el botón de "🔍 Modo diagnóstico" abajo a la izquierda. Le pone un contorno punteado a los contenedores que usan Grid y Flexbox, para poder mostrar en la sustentación cómo está armada la estructura por debajo del diseño visual — útil para explicar en vivo sin tener que abrir las herramientas de desarrollador del navegador.

**El selector de universos en el footer.** Es mi manera de demostrar compatibilidad entre navegadores sin hacerlo aburrido: en vez de solo escribir prefijos `-webkit-` y dejarlo ahí, el usuario puede tocar un botón y ver en vivo cómo el sitio responde a un modo de alto contraste o a un tema claro, que son justo los casos donde un `@supports` o un fallback bien hecho hace la diferencia.

## Cómo verlo

Solo abre `index.html` en cualquier navegador — no necesita servidor ni build previo, porque el CSS ya está compilado en `dist/`. Eso sí, necesita conexión a internet la primera vez, porque las fuentes (Google Fonts) y los frameworks (Bootstrap, Materialize, Tailwind) se cargan desde CDN.

## Lo que aprendí armándolo

Meter diez tecnologías distintas en un solo sitio sin que se vea como un collage fue el reto más grande. Lo que más me ayudó fue no pensar "¿dónde meto Grid?" sino "¿qué estación necesita más una estructura modular?" — cuando la pregunta parte del contenido y no de la lista de temas, las decisiones técnicas dejan de sentirse forzadas.
