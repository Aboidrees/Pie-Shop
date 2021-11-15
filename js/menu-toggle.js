function menuToggle() {
  document
    .getElementById('primaryNav')
    .classList
    .toggle('open');
}
let button = document.getElementById('hamburgerBtn');
button.onclick = menuToggle;
