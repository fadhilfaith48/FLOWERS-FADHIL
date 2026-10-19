(function () {
  var cards = document.querySelectorAll('.polaroid');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(function (c) {
      c.classList.add('show');
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  cards.forEach(function (c) {
    io.observe(c);
  });
})();