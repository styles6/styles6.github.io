(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Wrap hero/story photos so they can drift inside a clipped frame
  document.querySelectorAll('.hero img, .story img').forEach(function (img) {
    var w = document.createElement('div');
    w.className = 'px';
    img.replaceWith(w);
    w.appendChild(img);
  });
  var header = document.querySelector('header');
  var imgs = Array.prototype.slice.call(document.querySelectorAll('.px img'));
  var ticking = false;
  function update() {
    ticking = false;
    header.classList.toggle('scrolled', window.scrollY > 40);
    if (reduce) return;
    var vh = window.innerHeight;
    imgs.forEach(function (img) {
      var r = img.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
      img.style.transform = 'translateY(' + (-p * 7).toFixed(2) + '%)';
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
