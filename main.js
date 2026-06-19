/* ─── ハンバーガーメニュー ─── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    mobileNav.classList.toggle('is-open');
    document.body.style.overflow = mobileNav.classList.contains('is-open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}
/* ==============================================
   マイポートフォリオ — main.js
   ============================================== */

/* ─── お問い合わせフォーム 送信処理（contact.html） ─── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  btn.textContent = '✓ 送信が完了しました';
  btn.style.background = '#6A8F6A';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '送信する — Send Message';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}
