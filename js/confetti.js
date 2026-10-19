(function (w) {
  w.spawnConfetti = function (count) {
    count = count || 90;
    var layer = document.createElement('div');
    layer.className = 'confetti-layer';
    document.body.appendChild(layer);

    var colors = ['#ff5c8a', '#ffb6c1', '#ffe5ec', '#ffd7a0', '#ff8fab', '#ffffff'];
    var i;
    for (i = 0; i < count; i++) {
      var piece = document.createElement('div');
      piece.className = 'confetti';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = Math.random() * 8 + 6 + 'px';
      piece.style.height = Math.random() * 12 + 8 + 'px';
      piece.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2);
      piece.style.animationDelay = Math.random() * 0.6 + 's';
      if (Math.random() > 0.5) piece.classList.add('confetti--round');
      layer.appendChild(piece);
    }

    setTimeout(function () {
      layer.remove();
    }, 4200);
  };
})(window);