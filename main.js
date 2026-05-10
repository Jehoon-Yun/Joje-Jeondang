// FAQ 토글
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section h2.section-title, .product-card, .price-card, .schedule-card, .process-step, .foryou-item, .guide-card, .subject-card, .resource-card, .exam-info-card, .dday-mini').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // 첫 FAQ 자동 오픈
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) firstFaq.classList.add('open');

  // 모바일 햄버거 메뉴 토글
  const toggle = document.querySelector('.nav-mobile-toggle');
  const panel = document.querySelector('.nav-mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-mobile-open');
      document.body.classList.toggle('menu-open');
    });

    // 패널 안의 링크 클릭 시 닫기 (외부 링크 제외)
    panel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (!link.classList.contains('external')) {
          document.body.classList.remove('nav-mobile-open');
          document.body.classList.remove('menu-open');
        }
      });
    });
  }
});
