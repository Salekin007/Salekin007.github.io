// Lightweight component loader - scripts/load-components.js
// Find elements with [data-component] or [data-src] and fetch their HTML content
(async function loadComponents() {
  const selectors = '[data-component], [data-src]';
  const containers = document.querySelectorAll(selectors);
  if (!containers.length) return;

  await Promise.all(Array.from(containers).map(async (el) => {
    const src = el.getAttribute('data-component') || el.getAttribute('data-src');
    if (!src) return;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`Failed to load component: ${src} - ${res.status}`);
      const html = await res.text();
      el.innerHTML = html;

      // Execute inline scripts inside component if present
      const scripts = el.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.head.appendChild(newScript);
        oldScript.remove();
      });
    } catch (err) {
      console.error(err);
    }
  }));
  // Signal that components have been loaded so other scripts can initialize safely
  document.dispatchEvent(new CustomEvent('components:loaded', { detail: { count: containers.length } }));
})();
