const bgChanger = window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 10) {
    document.body.classList.add('mainmenu');
  } else {
    document.body.classList.remove('mainmenu');
  }
});

export { bgChanger as default };
