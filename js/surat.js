(function () {
  var envelope = document.getElementById('envelope');
  var page = document.getElementById('suratPage');
  var letterText = document.getElementById('letterText');

  var message = [
    'Untuk kamu,',
    '',
    'Aku cuma mau bilang, terima kasih sudah hadir dan membuat hari-hariku lebih berwarna. Semoga kelopak-kelopak ini bisa menyampaikan setengah saja dari rasa yang kusimpan untukmu. ♥',
    '',
    '— Dari aku, untuk kamu'
  ].join('\n');

  var opened = false;

  function open() {
    if (opened) return;
    opened = true;
    page.classList.add('open');
    envelope.classList.add('open');
    if (window.spawnConfetti) window.spawnConfetti(120);
    typeLetter();
  }

  function typeLetter() {
    var i = 0;
    letterText.innerHTML = '';

    function step() {
      if (i < message.length) {
        var ch = message[i];
        if (ch === '\n') {
          letterText.innerHTML += '<br>';
        } else {
          letterText.innerHTML += ch;
        }
        i++;
        setTimeout(step, 26);
      }
    }

    setTimeout(step, 250);
  }

  envelope.addEventListener('click', open);
  envelope.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
})();