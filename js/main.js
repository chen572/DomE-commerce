const cart = [];
const products = [
    {name: 'Harry Potter and the Chamber of Secrets', price: 10, img: 'https://images-na.ssl-images-amazon.com/images/I/51uDvYtlmwL.jpg', reviewNum: 7.4, reviewText: 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.'},
    {name: 'Jaws', price: 20, img: 'https://images-na.ssl-images-amazon.com/images/I/71U4vaOry-L._SX522_.jpg', reviewNum: 8.1, reviewText: 'When a killer shark unleashes chaos on a beach community, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.'},
    {name: 'Lord of the Rings: The Two Towers', price: 15, img: 'https://images-na.ssl-images-amazon.com/images/I/915my3fk4QL._SX522_.jpg', reviewNum: 8.7, reviewText: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.'},
    {name: 'Star Wars: The Rise of Skywalker', price: 18, img: 'https://images-na.ssl-images-amazon.com/images/I/819S9CGB5nL._SX522_.jpg', reviewNum: 6.7, reviewText: 'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.'},
    {name: 'E.T. The Extra-Terrestrial', price: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/71hePU1hACL._SY679_.jpg', reviewNum: 7.8, reviewText: 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'},
    {name: 'The Hobbit: The Desolation of Smaug', price: 10, img: 'https://images-na.ssl-images-amazon.com/images/I/51xfCoIXKNL.jpg', reviewNum: 7.8, reviewText: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'},
    {name: 'John Wick', price: 12, img: 'https://images-na.ssl-images-amazon.com/images/I/5180Jb6iREL.jpg', reviewNum: 7.4, reviewText: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.'},
    {name: 'Jurassic Park', price: 8, img: 'https://images-na.ssl-images-amazon.com/images/I/81dEScugRUL._SX522_.jpg', reviewNum: 8.1, reviewText: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.'},
    {name: 'Saving Private Ryan', price: 10, img: 'https://www.dvdplanetstore.pk/wp-content/uploads/2014/02/Saving-Private-Ryan-1998.jpg', reviewNum: 8.6, reviewText: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.'}
];

const aboutUsPage = document.getElementById('aboutUs');
const allProductsPage = document.getElementById('allProducts');
const cartPage = document.getElementById('cart');

aboutUsPage.addEventListener('click', moveToAboutUs);
allProductsPage.addEventListener('click', moveToAllProducts);
cartPage.addEventListener('click', moveToCart);