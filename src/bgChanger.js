function bgChanger() {
  if (this.scrollY > this.innerHeight / 10) {
    document.body.classList.add('mainmenu');
  } else {
    document.body.classList.remove('mainmenu');
  }
}
window.addEventListener('scroll', bgChanger);

export default bgChanger;