/* ==============================================
   マイポートフォリオ — main.js
   ============================================== */

/* ─── スキルバー アニメーション（about.html） ─── */
const skillSection = document.querySelector('#skill');
if (skillSection) {
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.animation = 'none';
          void bar.offsetHeight; // reflow
          bar.style.animation = 'fillBar 1.4s ease forwards';
        });
      }
    });
  }, { threshold: 0.2 });
  skillObserver.observe(skillSection);
}

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
