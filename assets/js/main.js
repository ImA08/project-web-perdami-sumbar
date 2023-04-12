
const parallax2 = document.querySelector('.parallax-img-2');
const child = parallax2.querySelector('.parallax-img-2 .container');
const offsetTop = parallax2.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= offsetTop) {
    child.setAttribute('style', 'background-attachment: scroll !important;');
    // berhenti efek parallax
    // tambahkan kelas CSS atau ubah properti CSS elemen anak
  } else {
    // lanjutkan efek parallax
    child.setAttribute('style', 'background-attachment: fixed;');
  }
});
