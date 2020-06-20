const moveToAboutUs = () => {
    const container = document.getElementById('content-container');
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.id = 'content-container';
    
    const header = document.createElement('h1');
    header.id = 'header';
    header.innerHTML = 'About Us'
    
    aboutUsContainer.appendChild(header)
    document.body.removeChild(container);
    document.body.appendChild(aboutUsContainer);
};