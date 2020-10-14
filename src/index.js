import navBar from './navbar';
import footer from './footer';
import menu from './menu';
import aboutUs from './about';
import contactMe from './contact';
import bgChanger from './bgChanger';

const index = (() => {
  const home = document.querySelector('.home');
  const welcomeMsg = document.createElement('div');
  const mainMenu = document.querySelector('#main-menu');

  mainMenu.classList.add('mainmenu');
  home.classList.add('bgimage');
  welcomeMsg.classList = 'text-white font-weight-bold bg-danger rounded w-50 p-4 ml-4';

  welcomeMsg.innerHTML = `
                        <h3>You're welcome to Iya Basira's Kitchen...</h3>
                        <p>We warmly serve all kinds of exquisite meals such breakfast, </p>
                        <p>lunch, dinner and all sorts of continental dishes.</p>
                        <p>Have fun!!!</p>
                        `;
  home.appendChild(welcomeMsg);
})();