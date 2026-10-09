(() => {
  document.querySelector('[data-open-samples]').addEventListener('click', () => document.querySelector('#sample-open').click());
  document.querySelector('[data-open-pricing]').addEventListener('click', () => document.querySelector('#pricing-open').click());
  const nav = document.querySelector('.floating-actions');
  const toggle = document.querySelector('#quick-actions-toggle');
  const panel = document.querySelector('#quick-actions-panel');
  function setOpen(open) {
    panel.hidden = !open;
    nav.classList.toggle('actions-expanded', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '빠른 메뉴 접기' : '빠른 메뉴 펼치기');
    toggle.querySelector('.quick-toggle-icon').textContent = open ? '−' : '＋';
  }
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  document.addEventListener('click', event => { if (!nav.contains(event.target)) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus({preventScroll:true}); }
  });
  for (const id of ['sample-dialog', 'booking-dialog', 'pricing-dialog']) {
    document.querySelector('#' + id).addEventListener('close', () => { setOpen(false); toggle.focus({preventScroll:true}); });
  }
})();
