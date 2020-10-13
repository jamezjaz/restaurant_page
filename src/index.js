import navBar from './navbar';

const index = (() =>{
  const content = document.querySelector('#content');
  const home = document.querySelector('.home');
  const welcomeMsg = document.createElement('div');

  home.classList.add('bgimage');
  welcomeMsg.classList = 'text-white font-weight-bold bg-danger rounded w-50 p-4 ml-4'

  welcomeMsg.innerHTML = `
  <h3>You're welcome to Iya Basir\'s Kitchen...</h3>
  <p>We warmly serve all kinds of esquisite meals such breakfast, </p>
  <p>lunch, dinner and all sorts of continental dishes.</p>
  <p>Have fun!!!</p>
  `;
  home.appendChild(welcomeMsg);
} )();