const moveToCart = () => {
    const container = document.getElementById('content-container');
    const cartContainer = document.createElement('div');
    cartContainer.id = 'content-container';

    const header = document.createElement('h1');
    header.id = 'header';
    header.innerHTML = 'Cart';

    cartContainer.appendChild(header);
    document.body.removeChild(container);
    document.body.appendChild(cartContainer);
}