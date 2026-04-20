export const initInspectionProtection = () => {
  // Disable right-click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable common keyboard shortcuts for dev tools
  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const ctrlKey = isMac ? e.metaKey : e.ctrlKey;

    // Block F-keys
    if (e.key.startsWith('F')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Block common inspector shortcuts
    if ((ctrlKey || e.shiftKey) && ['I', 'J', 'C', 'U', 'S', 'K', 'P'].includes(e.key.toUpperCase())) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // Disable drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable inspect element on mobile (long press)
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Detect dev tools via window size detection
  const detectDevTools = () => {
    const threshold = 160;
    if (window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold) {
      document.body.innerHTML = '<h1 style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">Developer tools detected. Please close them to view this site.</h1>';
    }
  };

  setInterval(detectDevTools, 500);
};
