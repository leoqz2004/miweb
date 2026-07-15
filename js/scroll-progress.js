// ============================================================
// scroll-progress.js
// Funcionalidades interactivas para GEOMUNDO Z
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbarToggle();
  initDiagnosticMode();
  initReadingModes();
});

// --- 1. BARRA DE PROGRESO DE LECTURA (Scroll Progress) ---
function initScrollProgress() {
  const fuelFill = document.querySelector('.fuel-fill');
  const fuelShip = document.querySelector('.fuel-ship');

  if (!fuelFill || !fuelShip) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Actualiza la barra y desplaza el emoji de prensa horizontalmente
    fuelFill.style.width = `${scrollPercent}%`;
    fuelShip.style.left = `calc(${scrollPercent}% - 10px)`;
  });
}

// --- 2. MENÚ HAMBURGUESA RESPONSIVO (Flexbox Collapse) ---
function initNavbarToggle() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle visual simple
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.width = '100%';
    }
  });
}

// --- 3. MODO DIAGNÓSTICO (Para sustentar Grid y Flexbox en tu entrega) ---
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

// --- 4. MODOS DE LECTURA (Universos de visualización) ---
function initReadingModes() {
  const buttons = document.querySelectorAll('.reading-modes button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.getAttribute('data-universe');
      
      // Limpiamos clases previas del body
      document.body.classList.remove('mode-light', 'mode-contrast');
      
      if (mode === 'light') {
        document.body.classList.add('mode-light');
        // Estilos rápidos en caliente para simular papel periódico real
        document.body.style.background = '#f5f5f3';
        document.body.style.color = '#111111';
      } else if (mode === 'contrast') {
        document.body.classList.add('mode-contrast');
        document.body.style.background = '#000000';
        document.body.style.color = '#ffff00';
      } else {
        // Modo oscuro por defecto
        document.body.style.background = '';
        document.body.style.color = '';
      }
    });
  });
}