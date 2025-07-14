document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.documentation-sidebar');
  if (!sidebar) return;

  // Create the "Table of Contents" button
  const tocToggle = document.createElement('button');
  tocToggle.textContent = 'Table of Contents';
  tocToggle.className = 'toc-toggle track-click';
  tocToggle.setAttribute('data-event-name', 'btn_clk_toc_toggle');
  tocToggle.setAttribute('data-event-location', 'sidebar');
  tocToggle.setAttribute('aria-label', 'Toggle Table of Contents');
  tocToggle.setAttribute('aria-expanded', 'false');
  
  // Insert the button before the sidebar content
  sidebar.prepend(tocToggle);

  const sidebarNav = sidebar.querySelector('.doc-nav-list');

  // Hide nav list by default on mobile
  if (window.innerWidth <= 768) {
    sidebarNav.style.display = 'none';
  }

  tocToggle.addEventListener('click', () => {
    const isExpanded = tocToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      sidebarNav.style.display = 'none';
      tocToggle.setAttribute('aria-expanded', 'false');
    } else {
      sidebarNav.style.display = 'block';
      tocToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Also listen for resize to show/hide nav appropriately
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebarNav.style.display = 'block'; // Always show on desktop
    } else {
      // On mobile, respect the current toggle state
      const isExpanded = tocToggle.getAttribute('aria-expanded') === 'true';
      sidebarNav.style.display = isExpanded ? 'block' : 'none';
    }
  });
});
