document.querySelectorAll('.img-compare').forEach(container => {
  const left = container.querySelector('.left-img');
  const right = container.querySelector('.right-img');
  const slider = container.querySelector('.slider');
 
  let isDragging = false;

  const move = (e) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    left.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    right.style.clipPath = `inset(0 0 0 ${percent}%)`;
    slider.style.left = `${percent}%`;
  };

  slider.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', move);

  slider.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', move);
});
