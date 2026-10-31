// 장면 크기 맞춤 — 1920 × 1080 캔버스를 창 안에 비율 유지로 맞춘다
(() => {
  const root = document.documentElement;
  const fit = () => {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    root.style.setProperty('--scale', scale);
  };
  fit();
  window.addEventListener('resize', fit);
})();
