// const nav = document.querySelector('nav');
// const logo = document.createElement('a');
// const body = document.querySelector('body');
// logo.innerHTML = `
//                 <a class="navbar-brand" href="#">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQexkyoofAAJU4fK-JliG637NVLcTorSgpNdQ&usqp=CAU" class="rounded-circle w-25" loading="lazy" alt="restaurant logo">
//                 </a>
//                 `;
// nav.appendChild(logo);
// body.appendChild(nav);

// const nav = (() => {
//     // const navbar = document.createElement('nav');
//     nav.setAttribute('class', 'navbar');
//     nav.innerHTML = `<a class="navbar-brand" href="#">
//                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQexkyoofAAJU4fK-JliG637NVLcTorSgpNdQ&usqp=CAU" class="rounded-circle w-25" loading="lazy" alt="restaurant logo">
//                     </a>`;
//     body.appendChild(nav);
//   })();


const aboutContent = (body) => {
    const container = document.querySelector('#content');
    const about = document.querySelector('.about');
    const para = document.querySelector('.para');
    para.textContent = 'This is Iya Basira\s Restaurant';

    about.appendChild(para);
    container.appendChild(div);
    body.appendChild(container);
};


