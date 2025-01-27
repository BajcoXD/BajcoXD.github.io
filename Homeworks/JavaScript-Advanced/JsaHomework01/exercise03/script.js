const apiUrl = "https://dummyjson.com/products?limit=10";
const productContainer = document.querySelector("#productContainer");

// Function to fetch products from the API
function fetchProducts() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => {
      renderProducts(data.products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      productContainer.innerHTML =
        '<div class="alert alert-danger">Failed to load products. Please try again later.</div>';
    });
}

// Function to render products
function renderProducts(products) {
  productContainer.innerHTML = ""; // Clear previous content
  products.forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

// Function to create a product card
function createProductCard(product) {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const card = document.createElement("div");
  card.className = "card h-100 shadow-sm";

  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  img.className = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = product.title;

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = product.description;

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}

// Fetch products when the page is loaded
document.addEventListener("DOMContentLoaded", fetchProducts);
