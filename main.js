function toggle(id) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });
  const current = document.getElementById(id);
  current.classList.toggle('show');
}

function enter() {
  const screen = document.getElementById('enterscreen');
  const main = document.getElementById('main');
  const audio = document.getElementById('audio');

  if (screen && main) {
    screen.style.display = 'none';
    main.style.display = 'block';
  }

  if (audio) {
    audio.play().catch(err => {
      console.warn('audio failed g', err);
    });
  }
}
