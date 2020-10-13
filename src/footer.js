const footer = (() =>{
    const footerCon = document.createElement('footer');
    const footer = document.createElement('div');
    footerCon.className = 'py-4 bg-secondary text-center text-white';
    footer.innerHTML = `
                        <small>Copyright &copy; <span>Jamezjaz 2020</span> || Iya Basira's Kitchen</small>
                        `;
    content.appendChild(footerCon);
    footerCon.appendChild(footer);
  } )();

  export default footer;