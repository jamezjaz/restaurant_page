const date = (() => {
  const home = document.querySelector('.home');
  const dateElement = document.createElement('span');
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString('en-US', options);
  dateElement.classList = 'flex d-flex justify-content-end font-weight-light text-white p-1';
  home.appendChild(dateElement);
})();

export default date;