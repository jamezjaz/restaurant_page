const menu = (() =>{
  const menus = document.querySelector('#menu');
  const mainMenu = document.querySelector('#main-menu');
  const menuItems = document.createElement('div');
  const home = document.querySelector('.home');
  menus.addEventListener('click', () => {
    home.style.display = 'none';
    menuItems.classList.add('menu');
    menuItems.innerHTML = `
                          <div class="flex d-flex-column pl-4">
                            <h3 class="text-center font-weight-bold pt-3">Our Delicasies</h3>
                            <div class="text-center">
                              <p>Behold our exquisite local meals..</p>
                            </div>
                            <div class="text-center pt-3">
                                <p>
                                Enjoy Egus Soup </br>
                                <s><small class="text-muted">$30.00</small></s> <small class="font-weight-bold">$25.99</small>
                                </p>
                            </div>
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                         
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                          
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">

                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                            <img src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                          </div>

                          <div class="flex d-flex-column pl-4">
                            <div class="text-center">
                                <h3 class="font-weight-bold pt-3">Our tasty continental dishes..</h3>
                                <p>What a yummy experience :)</p>
                            </div>
                            <div class="flex d-flex-column">
                                <div>
                                    <img src="https://c.ndtvimg.com/h92oi84_calamari-rings_120x90_04_September_18.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://c.ndtvimg.com/h92oi84_calamari-rings_120x90_04_September_18.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://c.ndtvimg.com/h92oi84_calamari-rings_120x90_04_September_18.jpg" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <p class="text-center">
                                      Crispy Calamari Rings </br>
                                      <s><small class="text-muted">$30.00</small></s> <small class="font-weight-bold">$25.99</small>
                                    </p>
                                </div>
                                <div>
                                    <img src="https://www.unclebens.com/images/default-source/recipes/continentalricecasserolelarge.jpg?sfvrsn=9a6d010f_28" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://www.unclebens.com/images/default-source/recipes/continentalricecasserolelarge.jpg?sfvrsn=9a6d010f_28" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://www.unclebens.com/images/default-source/recipes/continentalricecasserolelarge.jpg?sfvrsn=9a6d010f_28" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <p class="text-center">
                                      Continental Rice </br>
                                      <s><small class="text-muted">$30.00</small></s> <small class="font-weight-bold">$25.99</small>
                                    </p>
                                </div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0UtFhrJZngAoa0z2FhoUOceMdh8JRRewXA&usqp=CAU" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0UtFhrJZngAoa0z2FhoUOceMdh8JRRewXA&usqp=CAU" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0UtFhrJZngAoa0z2FhoUOceMdh8JRRewXA&usqp=CAU" class="soup w-25 rounded-circle p-4" loading="lazy" alt="egusi soup">
                                    <p class="text-center">
                                      Chicken Pizza </br>
                                      <s><small class="text-muted">$30.00</small></s> <small class="font-weight-bold">$25.99</small>
                                    </p>
                                </div>
                            </div>
                          </div>
                          `;
  })
  mainMenu.appendChild(menuItems);
} )();

export default menu;