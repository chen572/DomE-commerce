const moveToCart = () => {
    const container = document.getElementById('content-container');
    const cartContainer = document.createElement('div');
    cartContainer.id = 'content-container';

    const header = document.createElement('h1');
    header.id = 'header';
    header.innerHTML = 'Cart';

    cartContainer.appendChild(header);

    for (let movieName of cart) {
        
        const photoContainer = document.createElement('img');
        photoContainer.setAttribute('class', 'photo-container');
        
        for (let i in products) {
            if (products[i].name == movieName) {
                photoContainer.src = `${products[i].img}`;

            }
        }
        const productContainer = document.createElement('div');
        productContainer.id = 'product-container-in-cart';


        // photoContainer.setAttribute('onmouseenter', 'bigImgInCart(this)');
        // photoContainer.setAttribute('onmouseleave', 'normalImgInCart(this)');
        photoContainer.style.float = 'left';

        const movieTitle = document.createElement('h2');
        movieTitle.setAttribute('class', 'movie-title-in-cart');
        movieTitle.innerHTML = `${movieName}`;

        const span = document.createElement('span');
        span.innerHTML = '<hr><br><br>'

        const deleteFromCartBtn = document.createElement('div');
        deleteFromCartBtn.classList.add('deleteFromCartBtn');
        deleteFromCartBtn.innerHTML = 'Delete from cart';
        deleteFromCartBtn.setAttribute('onclick', 'deleteFromCart(this)');

        productContainer.appendChild(photoContainer);
        productContainer.appendChild(movieTitle);
        productContainer.appendChild(deleteFromCartBtn);
        productContainer.appendChild(span);

        cartContainer.appendChild(productContainer);
    };

    document.body.removeChild(container);
    document.body.appendChild(cartContainer);
};

const addToCart = (movie) => {
    cart.push(movie.parentNode.children[1].innerHTML);
    document.getElementById('cartCounter').innerHTML++;
};

const deleteFromCart = (movie) => {
    cart.splice(cart.indexOf(movie.parentNode.children[1].innerHTML),1);
    document.getElementById('cartCounter').innerHTML--;
    moveToCart();
};

function bigImgInCart(photo) {
    photo.style.width = '250px';
    photo.style.height = '300px';
};

function normalImgInCart(photo) {
    photo.style.width = '150px';
    photo.style.height = '200px';
};