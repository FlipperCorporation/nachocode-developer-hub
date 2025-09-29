// /static/js/copy-heading-link.js
(function () {
  // 브라우저 환경에서만
  if (typeof window === 'undefined' || !navigator.clipboard) return;

  // 클릭 위임: 헤더의 해시 링크(a.hash-link) 또는 그 부모(헤더)를 클릭했을 때만 작동
  document.addEventListener('click', e => {
    const hashLink = e.target.closest('a.hash-link');
    if (!hashLink) return; // 해시 아이콘/링크가 아니면 무시

    // 기본 동작(해시 이동)은 그대로 두고, 추가로 복사만 수행
    // hashLink.href는 절대 URL일 수 있으므로, 현재 경로 + 해시로 재구성해도 OK
    const { origin, pathname } = window.location;
    const hash = hashLink.getAttribute('href') || hashLink.hash; // "#my-section"
    const url = `${origin}${pathname}${hash || ''}`;

    navigator.clipboard.writeText(url).catch(() => {
      /* 조용히 실패 무시 */
    });

    // 간단한 피드백(optional)
    const msg = document.createElement('div');
    msg.textContent = '링크 복사됨';
    Object.assign(msg.style, {
      position: 'fixed',
      right: '12px',
      bottom: '12px',
      padding: '6px 10px',
      background: 'var(--ifm-color-primary)',
      color: '#fff',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      boxShadow: '0 2px 8px rgba(0,0,0,.15)',
      opacity: '0',
      transition: 'opacity .15s ease',
    });
    document.body.appendChild(msg);
    requestAnimationFrame(() => (msg.style.opacity = '1'));
    setTimeout(() => {
      msg.style.opacity = '0';
      setTimeout(() => msg.remove(), 200);
    }, 1000);
  });
})();
