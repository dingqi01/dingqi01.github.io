(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const publications = document.querySelectorAll('[data-publication-list] .publication-card');
  const emptyState = document.querySelector('[data-filter-empty]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;

      filterButtons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');

      publications.forEach((publication) => {
        const show = filter === 'all' || publication.dataset.type === filter;
        publication.hidden = !show;
        if (show) visible += 1;
      });

      if (emptyState) emptyState.hidden = visible !== 0;
    });
  });

  document.querySelectorAll('[data-current-year]').forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
})();

