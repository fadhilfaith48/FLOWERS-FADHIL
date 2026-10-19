(function () {
  var container = document.getElementById('petals');
  if (!container) return;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function make(className, style) {
    var el = document.createElement('div');
    el.className = className;
    el.style.cssText = style;
    container.appendChild(el);
    return el;
  }

  var i;
  var butterflies = document.body.dataset.effects === 'butterflies';
  var petalColors = ['#ffb6c1', '#ff8fab', '#ff5c8a', '#ffe5ec', '#ffd1dc'];

  for (i = 0; i < 22; i++) {
    make('star', [
      'left:' + rand(0, 100) + 'vw',
      'top:' + rand(0, 100) + 'vh',
      'width:' + rand(1.5, 3.5) + 'px',
      'height:' + rand(1.5, 3.5) + 'px',
      'animation-duration:' + rand(3, 6) + 's',
      'animation-delay:' + rand(0, 4) + 's'
    ].join(';'));
  }

  if (butterflies) {
    for (i = 0; i < 8; i++) {
      var fly = document.createElement('div');
      fly.className = 'butterfly';
      var wing = document.createElement('span');
      wing.className = 'butterfly-wing';
      wing.textContent = '🦋';
      wing.style.fontSize = rand(18, 30) + 'px';
      wing.style.animationDuration = rand(0.35, 0.7) + 's';
      fly.appendChild(wing);
      fly.style.cssText = [
        'top:' + rand(8, 70) + 'vh',
        'animation-duration:' + rand(14, 24) + 's, ' + rand(5, 9) + 's',
        'animation-delay:' + (-rand(0, 22)) + 's'
      ].join(';');
      container.appendChild(fly);
    }
    for (i = 0; i < 4; i++) {
      make('petal', [
        'left:' + rand(0, 100) + 'vw',
        'width:' + rand(7, 13) + 'px',
        'height:' + rand(4, 8) + 'px',
        'background:' + petalColors[Math.floor(Math.random() * petalColors.length)],
        '--sway:' + rand(-8, 8) + 'vw',
        'animation-duration:' + rand(10, 16) + 's',
        'animation-delay:' + rand(0, 9) + 's',
        'opacity:' + rand(0.3, 0.55)
      ].join(';'));
    }
    return;
  }

  for (i = 0; i < 12; i++) {
    make('petal', [
      'left:' + rand(0, 100) + 'vw',
      'width:' + rand(7, 13) + 'px',
      'height:' + rand(4, 8) + 'px',
      'background:' + petalColors[Math.floor(Math.random() * petalColors.length)],
      '--sway:' + rand(-8, 8) + 'vw',
      'animation-duration:' + rand(10, 16) + 's',
      'animation-delay:' + rand(0, 9) + 's',
      'opacity:' + rand(0.4, 0.75)
    ].join(';'));
  }

  for (i = 0; i < 6; i++) {
    make('heart', [
      'left:' + rand(0, 100) + 'vw',
      'width:' + rand(7, 13) + 'px',
      'height:' + rand(7, 13) + 'px',
      'animation-duration:' + rand(8, 13) + 's',
      'animation-delay:' + rand(0, 10) + 's'
    ].join(';'));
  }
})();