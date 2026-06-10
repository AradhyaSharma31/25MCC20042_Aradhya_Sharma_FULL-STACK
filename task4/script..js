// 2. API Integration Fetch product data
// from: https://fakestoreapi.com/products
// Use: fetch() or async/await to retrieve data.

console.log("Fetching product data...");

const apiUrl = "https://fakestoreapi.com/products";

const categoryFilter = document.getElementById("category-filter");
const productList = document.getElementById("product-list")

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data: ", data);
        return data;
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function createProductCard(id, title, price, description, category, image, rating) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${image}" alt="${title}" class="product-image">
        <h3 class="product-title">${title}</h3>
        <p class="product-price">$${price}</p>
        <p class="product-description">${description}</p>
        <p class="product-category">Category: ${category}</p>
        <p class="product-rating">Rating: ${rating.rate} (${rating.count} reviews)</p>
    `;
    productList.appendChild(card);
    return card;
}

async function generateProduct() {
    let data = await fetchProducts();

    console.log("Generating product cards...");
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let id = data[i].id;
        let title = data[i].title;
        let price = data[i].price;
        let description = data[i].description;
        let category = data[i].category;
        let image = data[i].image;
        let rating = data[i].rating;

        console.log(id, title, price, description, category, image, rating);

        createProductCard(id, title, price, description, category, image, rating);
    }
}

generateProduct();