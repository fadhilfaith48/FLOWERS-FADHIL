(function () {
  var container = document.getElementById('petals');
  if (!container) return;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
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
  var wingColors = [
    ['#ffb6c1', '#ff5c8a'],
    ['#ffd7e0', '#c2254e'],
    ['#efe0ff', '#b98ad6'],
    ['#ffffff', '#ffb6c1'],
    ['#fff8c4', '#ffd166'],
    ['#ffc2d6', '#e86a9a']
  ];
  var flightPaths = ['a', 'b', 'c', 'a', 'b', 'hover'];

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

  function makeButterfly(index) {
    var pair = wingColors[index % wingColors.length];
    var fly = document.createElement('div');
    fly.className =
      'butterfly butterfly--css butterfly--' + flightPaths[index % flightPaths.length];
    fly.setAttribute('aria-hidden', 'true');
    fly.style.cssText = [
      '--top:' + rand(22, 62) + 'vh',
      '--size:' + rand(0.7, 1.25).toFixed(2),
      '--flap:' + rand(0.28, 0.55).toFixed(2) + 's',
      '--fly:' + rand(16, 26).toFixed(1) + 's',
      '--delay:' + (-rand(0, 20)).toFixed(1) + 's',
      '--wing:' + pair[0],
      '--wing-deep:' + pair[1]
    ].join(';');

    var inner = document.createElement('div');
    inner.className = 'butterfly__inner';

    ['lu', 'ru', 'll', 'rl'].forEach(function (wing) {
      var el = document.createElement('div');
      el.className = 'butterfly__wing butterfly__wing--' + wing;
      inner.appendChild(el);
    });

    var body = document.createElement('div');
    body.className = 'butterfly__body';
    inner.appendChild(body);

    var antennaLeft = document.createElement('div');
    antennaLeft.className = 'butterfly__antenna butterfly__antenna--l';
    inner.appendChild(antennaLeft);

    var antennaRight = document.createElement('div');
    antennaRight.className = 'butterfly__antenna butterfly__antenna--r';
    inner.appendChild(antennaRight);

    fly.appendChild(inner);
    container.appendChild(fly);
  }

  if (butterflies) {
    for (i = 0; i < 6; i++) makeButterfly(i);

    for (i = 0; i < 8; i++) {
      make('petal', [
        'left:' + rand(0, 100) + 'vw',
        'width:' + rand(7, 13) + 'px',
        'height:' + rand(4, 8) + 'px',
        'background:' + pick(petalColors),
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
      'background:' + pick(petalColors),
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
