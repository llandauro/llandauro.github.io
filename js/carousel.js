// Adds arrows, dots, captions, arrow-key and swipe support to every .carousel.
document.documentElement.classList.remove('no-js');

document.querySelectorAll('.carousel').forEach(function (carousel) {
  var frame = carousel.querySelector('.slides');
  var slides = Array.from(frame.querySelectorAll('img'));
  var caption = carousel.querySelector('.caption');
  var dots = document.createElement('div');
  var current = 0;
  dots.className = 'dots';

  function button(parent, className, label, text, onClick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = className;
    b.setAttribute('aria-label', label);
    b.textContent = text;
    b.addEventListener('click', onClick);
    parent.appendChild(b);
    return b;
  }

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('active', i === current); });
    dotButtons.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
      if (i === current) d.setAttribute('aria-current', 'true');
      else d.removeAttribute('aria-current');
    });
    caption.textContent = slides[current].dataset.caption || '';
  }

  button(frame, 'arrow prev', 'Previous image', '‹', function () { show(current - 1); });
  button(frame, 'arrow next', 'Next image', '›', function () { show(current + 1); });
  var dotButtons = slides.map(function (s, i) {
    return button(dots, '', 'Show image ' + (i + 1), '', function () { show(i); });
  });
  carousel.appendChild(dots);

  carousel.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  var startX = 0;
  frame.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
  frame.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
  });

  show(0);
});
