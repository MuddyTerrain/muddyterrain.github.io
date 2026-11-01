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

// Email signup forms (_includes/email-signup.html)
document.addEventListener('submit', async (e) => {
  const form = e.target;
  if (!form.classList.contains('email-signup')) return;
  e.preventDefault();

  const button = form.querySelector('button');
  const message = form.querySelector('.email-signup-message');
  const show = (text, isError) => {
    message.textContent = text;
    message.classList.toggle('is-error', isError);
  };

  button.disabled = true;
  show('', false);
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.elements.email.value,
        website: form.elements.website.value,
        list: form.dataset.list,
        source: form.dataset.source,
      }),
    });
    if (response.ok) {
      form.classList.add('is-done');
      show(form.dataset.success, false);
      return;
    }
    const body = await response.json().catch(() => ({}));
    show(typeof body.detail === 'string' ? body.detail : 'Something went wrong. Please try again.', true);
  } catch (error) {
    show('Could not reach the server. Please try again.', true);
  }
  button.disabled = false;
});
