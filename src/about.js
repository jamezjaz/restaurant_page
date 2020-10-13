const aboutUs = (() =>{
  const about = document.querySelector('#about');
  const aboutInfo = document.querySelector('#about-info');
  const aboutMsg = document.createElement('div');
  const home = document.querySelector('.home');
  const menu = document.querySelector('.main-menu');
//   const contact = document.querySelector('.contact-form');

  about.addEventListener('click', () => {
    aboutMsg.classList.add('about-msg');
    home.style.display = 'none';
    menu.style.display = 'none';
    // contact.style.display = 'none';
  aboutMsg.innerHTML = `
                        <div>
                            <h3 class="text-center">About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque id mi non lorem posuere vehicula sed ut odio. 
                                Nullam euismod sollicitudin urna, nec lacinia tortor cursus at. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris in fringilla dui. Integer consectetur egestas orci a lacinia. 
                                Fusce elementum nisl non leo sodales, eu finibus urna malesuada. 
                                Nulla et pulvinar est. Maecenas in erat sed augue maximus sollicitudin. 
                                Fusce augue lorem, sagittis non euismod sit amet, convallis in lacus. 
                                Sed ut pharetra arcu. Integer mollis purus vel augue auctor ornare.
                                Maecenas dignissim erat et cursus imperdiet. Maecenas commodo nisi 
                                a efficitur elementum. Nulla eleifend, nulla eget iaculis auctor, 
                                justo ipsum interdum tortor, nec aliquet velit eros ultricies enim. 
                                Mauris vitae lacus vitae ante rutrum semper in ac sapien. Vestibulum 
                                sed hendrerit nibh. Quisque lectus arcu, imperdiet non arcu vitae, 
                                iaculis luctus nisl. Sed euismod nulla arcu, quis consectetur elit 
                                suscipit ac. Etiam euismod ullamcorper ultricies.

                                Nunc eget quam sed ante ullamcorper sollicitudin. Nullam sodales 
                                lobortis mauris, ut tempus eros congue non. Praesent sodales mauris nunc, 
                                eu laoreet velit suscipit id. Mauris eget turpis aliquam, mollis ex quis,
                                 vestibulum tortor. Aenean elementum massa et augue ornare fermentum. 
                                 In malesuada aliquam ligula eu iaculis. Mauris malesuada enim sit amet 
                                 elit tincidunt finibus. Suspendisse lobortis est tortor, at euismod nibh 
                                 suscipit eget.
                            </p>
                            <h4 class="text-center"> Iya Basira's Kitchen was established in 1660 and we specialize on the following:</h4>
                            <p class="font-weight-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque id mi non lorem posuere vehicula sed ut odio. 
                                Nullam euismod sollicitudin urna, nec lacinia tortor cursus at. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris in fringilla dui. Integer consectetur egestas orci a lacinia. 
                                Fusce elementum nisl non leo sodales, eu finibus urna malesuada. 
                                Nulla et pulvinar est. Maecenas in erat sed augue maximus sollicitudin. 
                                Fusce augue lorem, sagittis non euismod sit amet, convallis in lacus. 
                                Sed ut pharetra arcu. Integer mollis purus vel augue auctor ornare.
                                Maecenas dignissim erat et cursus imperdiet. Maecenas commodo nisi 
                                a efficitur elementum. Nulla eleifend, nulla eget iaculis auctor, 
                                justo ipsum interdum tortor, nec aliquet velit eros ultricies enim. 
                                Mauris vitae lacus vitae ante rutrum semper in ac sapien. Vestibulum 
                                sed hendrerit nibh. Quisque lectus arcu, imperdiet non arcu vitae, 
                                iaculis luctus nisl. Sed euismod nulla arcu, quis consectetur elit 
                                suscipit ac. Etiam euismod ullamcorper ultricies.

                                Nunc eget quam sed ante ullamcorper sollicitudin. Nullam sodales 
                                lobortis mauris, ut tempus eros congue non. Praesent sodales mauris nunc, 
                                eu laoreet velit suscipit id. Mauris eget turpis aliquam, mollis ex quis,
                                 vestibulum tortor. Aenean elementum massa et augue ornare fermentum. 
                                 In malesuada aliquam ligula eu iaculis. Mauris malesuada enim sit amet 
                                 elit tincidunt finibus. Suspendisse lobortis est tortor, at euismod nibh 
                                 suscipit eget.
                            </p>
                        </div>
                        `;
  })
  aboutInfo.appendChild(aboutMsg);
} )();

export default aboutUs;