(function () {
  var last = 0;

  document.addEventListener('click', function (e) {
    var now = Date.now();
    if (now - last < 130) return;
    last = now;

    var heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.textContent = Math.random() < 0.5 ? '♥' : '❤';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = (14 + Math.random() * 16) + 'px';
    heart.style.color = ['#ff5c8a', '#ff8fab', '#e0365c', '#ffd7e0'][Math.floor(Math.random() * 4)];
    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 1200);
  });
})();