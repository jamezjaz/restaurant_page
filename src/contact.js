const contactMe = (() =>{
    const contact = document.querySelector('#contact');
    const contactCon = document.querySelector('#contact-me');
    const contactForm = document.createElement('div');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.main-menu');
    const about = document.querySelector('.about');
  
    contact.addEventListener('click', () => {
      home.style.display = 'none';
      menu.style.display = 'none';
      about.style.display = 'none';
      contactForm.classList.add('form');
      contactForm.innerHTML = `
                              <div>
                                <div class="text-center">
                                    <h3>Give us a try, you'll never regret you did...</h3>
                                    <h2>Contact Us</h2>
                                    <p>Place Your Order Now</p>
                                </div>
                                <form>
                                    <div class="form-group py-3">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group py-3">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    </div>
                                    <div class="form-check py-3">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                              </div>
                              `;
    })
    contactCon.appendChild(contactForm);
  } )();
  
  export default contactMe;