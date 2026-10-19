(function () {
  var audio = null;
  var playBtn = document.getElementById('playBtn');
  var progressBar = document.getElementById('progressBar');
  var time = document.getElementById('time');
  var hint = document.getElementById('musicHint');
  var notesEl = document.getElementById('notes');
  var playing = false;

  function ensureAudio() {
    if (audio) return;
    audio = new Audio('media/lagu.mp3');
    audio.addEventListener('timeupdate', update);
    audio.addEventListener('loadedmetadata', update);
    audio.addEventListener('ended', function () {
      playBtn.textContent = '▶';
      playing = false;
    });
    audio.addEventListener('error', function () {
      if (hint) hint.classList.remove('hidden');
      playBtn.textContent = '▶';
      playing = false;
    });
  }

  function fmt(sec) {
    if (isNaN(sec)) sec = 0;
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function update() {
    var cur = audio.currentTime || 0;
    var dur = audio.duration || 0;
    progressBar.style.width = (dur ? (cur / dur) * 100 : 0) + '%';
    time.textContent = fmt(cur) + ' / ' + fmt(dur);
  }

  function spawnNotes() {
    if (!notesEl) return;
    var glyphs = ['♪', '♫', '♪', '♬'];
    var i;
    for (i = 0; i < notesEl.children.length; i++) {
      notesEl.children[i].remove();
    }
    for (i = 0; i < 14; i++) {
      var n = document.createElement('div');
      n.className = 'note';
      n.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      n.style.left = Math.random() * 100 + 'vw';
      n.style.fontSize = (14 + Math.random() * 16) + 'px';
      n.style.color = ['#ffb6c1', '#ff5c8a', '#ffe5ec', '#ffd7a0'][Math.floor(Math.random() * 4)];
      n.style['--sway'] = (Math.random() * 12 - 6) + 'vw';
      n.style.animationDuration = (Math.random() * 5 + 7) + 's';
      n.style.animationDelay = (-Math.random() * 8) + 's';
      n.style.opacity = (Math.random() * 0.4 + 0.5).toFixed(2);
      notesEl.appendChild(n);
    }
  }

  function toggle() {
    if (playing) {
      audio.pause();
      playBtn.textContent = '▶';
    } else {
      ensureAudio();
      audio.play().catch(function () {
        if (hint) hint.classList.remove('hidden');
      });
      if (hint) hint.classList.add('hidden');
      playBtn.textContent = '⏸';
    }
    playing = !playing;
  }

  playBtn.addEventListener('click', toggle);

  document.querySelector('.track').addEventListener('click', function (e) {
    var w = this.clientWidth;
    var x = e.clientX - this.getBoundingClientRect().left;
    if (audio && audio.duration) {
      audio.currentTime = (x / w) * audio.duration;
      update();
    }
  });

  spawnNotes();
})();