const moveToAllProducts = () => {
    const container = document.getElementById('content-container');
    const allProductsContainer = document.createElement('div');
    allProductsContainer.id = 'content-container';

    const header = document.createElement('h1');
    header.id = 'header';
    header.innerHTML = 'All Products <br>';
    
    allProductsContainer.appendChild(header);

    for (let i in products) {
        const productContainer = document.createElement('div');
        productContainer.id = 'product-container';

        const photoContainer = document.createElement('img');
        photoContainer.setAttribute('class', 'photo-container');
        photoContainer.src = `${products[i].img}`;

        photoContainer.setAttribute('onmouseenter', 'bigImg(this)');
        photoContainer.setAttribute('onmouseleave', 'normalImg(this)');

        const movieTitle = document.createElement('h2');
        movieTitle.setAttribute('class', 'movie-title');
        movieTitle.innerHTML = `${products[i].name}`;

        const imdbReviewNum = document.createElement('p');
        imdbReviewNum.classList.add('reviewNum');
        imdbReviewNum.innerHTML = `${products[i].reviewNum}/10`;

        const starImage = document.createElement('img');
        starImage.src = 'https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png'
        starImage.classList.add('star');

        const imdbReviewText = document.createElement('p');
        imdbReviewText.classList.add('reviewText');
        imdbReviewText.innerHTML = `${products[i].reviewText}`;

        const addToCartBtn = document.createElement('div');
        addToCartBtn.classList.add('addToCartBtn');
        addToCartBtn.innerHTML = 'Add to cart';

        productContainer.appendChild(photoContainer);
        productContainer.appendChild(movieTitle);
        productContainer.appendChild(imdbReviewNum);
        productContainer.appendChild(starImage);
        productContainer.appendChild(addToCartBtn);
        productContainer.appendChild(imdbReviewText);
        
        allProductsContainer.appendChild(productContainer);
    };

    
    document.body.removeChild(container);
    document.body.appendChild(allProductsContainer);
};

function bigImg(photo) {
    photo.style.width = '250px';
    photo.style.height = '300px';
};

function normalImg(photo) {
    photo.style.width = '150px';
    photo.style.height = '200px';
};