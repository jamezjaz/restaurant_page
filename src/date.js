const date = (() =>{
    const content = document.querySelector('#content');
    const navBar = document.querySelector('#navbar');
    const dateElement = document.createElement('span');
    const options = { weekday: 'long', month: 'short', day: 'numeric'};
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString('en-US', options);
    dateElement.classList = 'flex d-flex justify-content-end text-dark font-weight-light pr-4 pt-1';
    navBar.appendChild(dateElement);
} )();

export default date;