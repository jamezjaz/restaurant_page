import date from './date';

const navBar = (() =>{
    const content = document.querySelector('#content');
    const nav = document.querySelector('#navbar');
    const navList = document.createElement('ul');
    const logo = document.createElement('li');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const about = document.createElement('li');
    const contact = document.createElement('li');
  
    navList.classList = 'bg-secondary flex d-flex';
    navList.style.listStyle = 'none';
    logo.setAttribute('id', 'logo');
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    about.setAttribute('id', 'about');
    contact.setAttribute('id', 'contact');
  
    logo.innerHTML = `
                      <a class="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQexkyoofAAJU4fK-JliG637NVLcTorSgpNdQ&usqp=CAU" class="rounded-circle w-25" loading="lazy" alt="restaurant logo">
                      </a>
                      `;
    home.innerHTML = `
                      <a class="navbar-brand" href="#">
                        <p>Home</p>
                      </a>
                      `;
    menu.innerHTML = `
                      <a class="navbar-brand" href="#">
                        <p>Menu</p>
                      </a>
                      `;
    about.innerHTML = `
                      <a class="navbar-brand" href="#">
                        <p>About</p>
                      </a>
                      `;
    contact.innerHTML = `
                      <a class="navbar-brand" href="#">
                        <p>Contact</p>
                      </a>
                      `;
  
    nav.appendChild(navList);
    navList.appendChild(logo);
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(about);
    navList.appendChild(contact);
  } )();

  export default navBar;
  