/* =============================================================
   조제전당 — main.js
   1) 모바일 햄버거 드로어
   2) 헤더 scroll 상태
   3) IntersectionObserver scroll-trigger reveal
   4) FAQ accordion (store.html)
   ============================================================= */
(() => {
  'use strict';

  /* ---------- 1) Mobile drawer ---------- */
  const ham = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  if (ham && drawer) {
    const toggle = (force) => {
      const next = typeof force === 'boolean' ? force : ham.getAttribute('aria-expanded') !== 'true';
      ham.setAttribute('aria-expanded', String(next));
      drawer.classList.toggle('open', next);
      document.body.classList.toggle('drawer-open', next);
    };
    ham.addEventListener('click', () => toggle());
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 1024) toggle(false); });
  }

  /* ---------- 2) Header scrolled state ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 3) Reveal on scroll ---------- */
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (targets.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('in'));
  }

  /* ---------- 4) FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0px';
    });
  });

  /* ---------- 5) Year stamp ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

})();
