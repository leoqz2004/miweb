// ============================================================
// scroll-progress.js
// Funcionalidades interactivas para GEOMUNDO Z
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbarToggle();
  initDiagnosticMode();
  initReadingModes();
  initRippleEffect();
  initFrameworkComponents();
});

// ============================================================
// 1. BARRA DE PROGRESO DE LECTURA (Fuel Bar)
// ============================================================
function initScrollProgress() {
  const fuelFill = document.querySelector('.fuel-fill');
  const fuelShip = document.querySelector('.fuel-ship');

  if (!fuelFill || !fuelShip) return;

  // Si la barra es vertical (como en tu diseño original)
  // Se asume que es una barra lateral derecha con height fijo.
  // Si es horizontal (top), se adapta.
  const isVertical = fuelFill.style.height !== undefined && fuelFill.style.height !== '';

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (isVertical) {
      // Barra vertical: altura (height) en lugar de width
      fuelFill.style.height = `${scrollPercent}%`;
      fuelShip.style.bottom = `calc(${scrollPercent}% - 10px)`;
    } else {
      // Barra horizontal (estilo clásico)
      fuelFill.style.width = `${scrollPercent}%`;
      fuelShip.style.left = `calc(${scrollPercent}% - 10px)`;
    }
  });
}

// ============================================================
// 2. MENÚ HAMBURGUESA RESPONSIVO (Navbar Toggle)
// ============================================================
function initNavbarToggle() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('open');
  });

  // Cerrar el menú al hacer clic en un enlace (opcional)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// 3. MODO DIAGNÓSTICO (Visualizar Grid y Flexbox)
// ============================================================
function initDiagnosticMode() {
  const diagBtn = document.querySelector('.diagnostic-toggle');
  if (!diagBtn) return;

  diagBtn.addEventListener('click', () => {
    document.body.classList.toggle('diagnostic-mode');
    const isActive = document.body.classList.contains('diagnostic-mode');
    diagBtn.textContent = isActive ? 'Ocultar Maqueta' : 'Ver Maqueta Grid/Flexbox';
    diagBtn.style.borderColor = isActive ? '#d32f2f' : '#bfa15f';
    diagBtn.style.color = isActive ? '#d32f2f' : '#bfa15f';
  });
}

// ============================================================
// 4. MODOS DE LECTURA (Universos: oscuro, claro, alto contraste)
// ============================================================
function initReadingModes() {
  const buttons = document.querySelectorAll('.btn-universe');
  if (!buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.universe; // 'dark', 'light', 'contrast'
      
      // Remover clases previas
      document.body.classList.remove('universe-light', 'universe-contrast');
      
      // Aplicar la clase correspondiente
      if (mode === 'light') {
        document.body.classList.add('universe-light');
      } else if (mode === 'contrast') {
        document.body.classList.add('universe-contrast');
      }
      // 'dark' es el modo por defecto, no se necesita clase adicional
    });
  });
}

// ============================================================
// 5. EFECTO RIPPLE (para botones de opinión – Material Design)
// ============================================================
function initRippleEffect() {
  const rippleButtons = document.querySelectorAll('.btn-ripple');
  
  rippleButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Crear el elemento ripple
      const circle = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      circle.classList.add('ripple-circle');
      
      // Añadir y remover después de la animación
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

// ============================================================
// 6. INICIALIZACIÓN DE COMPONENTES DE FRAMEWORKS
//    (Bootstrap, Materialize) – solo si existen en la página
// ============================================================
function initFrameworkComponents() {
  // Bootstrap: inicializar tooltips, popovers, etc. si existen
  if (typeof bootstrap !== 'undefined') {
    // Ejemplo: activar todos los tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
    
    // Activar popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(el => new bootstrap.Popover(el));
  }

  // Materialize: inicializar componentes como tabs, parallax, etc.
  if (typeof M !== 'undefined') {
    // Tabs
    const tabsElems = document.querySelectorAll('.tabs');
    tabsElems.forEach(el => M.Tabs.init(el));
    
    // Parallax
    const parallaxElems = document.querySelectorAll('.parallax');
    parallaxElems.forEach(el => M.Parallax.init(el));
    
    // Modals
    const modalElems = document.querySelectorAll('.modal');
    modalElems.forEach(el => M.Modal.init(el));
    
    // Dropdown
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    dropdownElems.forEach(el => M.Dropdown.init(el));
  }
}

// ============================================================
// 7. PEQUEÑO HELPER: Cerrar menú al hacer scroll (opcional)
// ============================================================
// (Opcional) Si se desea cerrar el menú al hacer scroll en móvil
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.querySelector('.nav-toggle');
  if (navLinks && navLinks.classList.contains('open')) {
    // Solo cerrar si el ancho es móvil (menos de 768px)
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('open');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }
});

// ============================================================
// FIN DE scroll-progress.js
// ============================================================