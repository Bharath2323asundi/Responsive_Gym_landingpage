// Navbar toggle & close
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
}
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show'));
}

// Close menu on link click + smooth scroll
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.scrollIntoView({behavior:"smooth"});
    if (navMenu.classList.contains('show')) navMenu.classList.remove('show');
  });
});
document.querySelectorAll('.footer-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({behavior:"smooth"});
  });
});

// IMG POPUP + SLIDER
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('img-modal-content');
const modalClose = document.querySelector('.close-modal');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');
let popupImgs = Array.from(document.querySelectorAll('.popup-img'));
let imgIndex = 0;

popupImgs.forEach((img, idx) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    imgIndex = idx;
    updateArrows();
  });
});
function updateArrows() {
  modalPrev.style.display = imgIndex > 0 ? 'block' : 'none';
  modalNext.style.display = imgIndex < popupImgs.length - 1 ? 'block' : 'none';
}
modalClose.onclick = function () { modal.style.display = 'none'; };
modalPrev.addEventListener('click', function () {
  if (imgIndex > 0) {
    imgIndex--;
    modalImg.src = popupImgs[imgIndex].src;
    updateArrows();
  }
});
modalNext.addEventListener('click', function () {
  if (imgIndex < popupImgs.length - 1) {
    imgIndex++;
    modalImg.src = popupImgs[imgIndex].src;
    updateArrows();
  }
});
modal.onclick = function (e) {
  if (e.target === modal) modal.style.display = 'none';
};