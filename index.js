let productsList = [
    {
        title: 'Televizor LED start ',
        category: 'televizoare',
        rating: '4.68',
        price: '499 Lei'
    },
    {
        title: 'Televizor Samsung ',
        category: 'televizoare',
        rating: '5',
        price: '334 Lei'
    },
    {
        title: 'Televizor LED start ',
        category: 'televizoare',
        rating: '4.68',
        price: '499 Lei'
    },
    {
        title: 'Telefon Samung',
        category: 'telefon',
        rating: '4.4',
        price: '500 Lei'
    }
]

let container = document.getElementById('container');

let createEmagProducts = (products) => {
    container.innerHTML = '';
    products.forEach((product) => {
        const { title, rating, price } = product;

        console.log(products[0].title)
        let productContainer = document.createElement('div');
        productContainer.className ='product-container' ;
    
        container.appendChild(productContainer);
        let productTitle = document.createElement('h1');
        productContainer.appendChild(productTitle);
        productTitle.innerHTML = title;
    
        let productRating = document.createElement('h2');
        productContainer.appendChild(productRating);
        productRating.innerHTML = `Ratingul este: ${rating}`;
    
        let productPrice = document.createElement('h3');
        productContainer.appendChild(productPrice)
        productPrice.innerHTML = `Pretul este: ${price}`;
    })
}


let getPhones = () => {
   let phoneProducts = productsList.filter((product) => {
        return product.category === "telefon"
    })
    createEmagProducts(phoneProducts)
}

let getTv = () => {
    let tvProducts = productsList.filter((product) => {
        return product.category === 'televizoare'
    })
    createEmagProducts(tvProducts);
}

createEmagProducts(productsList);
