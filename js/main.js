onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I ♥ U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        setTimeout(() => {
          const cap = document.getElementById('caption');
          if (cap) cap.classList.add('show');
          const link = document.querySelector('.open-letter');
          if (link) link.classList.add('show');
        }, 700);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};