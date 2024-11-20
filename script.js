gsap.to(".section-1 h3", {
  x: 500,
  duration: 4,
  delay: 0.4,
  repeat: true,
});
const products = [
  {
    id: 1,
    name: " Moto Edge 50 Fusion",
    price: 22999,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRussM6plht3zYcH_Iwlqok-sBIomyWezU7zg&s",
  },
  {
    id: 2,
    name: "Realme 12Pro plus",
    price: 29999,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDVkKP0S9fYYrVIsthzWplJa0rGSS-RU2dA&s",
  },
  {
    id: 3,
    name: "Vivo t3 Ultra ",
    price: 32199,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOeDjaicDcua7svLxBllUB9n3N4akcAbuOQ&s",
  },
  {
    id: 4,
    name: "Iqoo 13",
    price: 39999,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_xmx8IWXj1t7oNh43BVkumE3Rj9hR1pciA&s",
  },
  {
    id: 5,
    name: "Samsung 24 Ultra",
    price: 125000,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwv7J6ZmgaLP7TLPYN0WkIymw8qgFP6hf1A&s",
  },
  {
    id: 6,
    name: "Lava agni 3",
    price: 23000,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZB1yltDd_jBE808OQVwa9HANAkaW7IZeJA&s",
  },
  {
    id: 7,
    name: "Nothing Phone 2a",
    price: 23999,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5qR2R2FrulGouyeek8N-y4oxGjI4Hb-2Vw&s",
  },
];
let cart = [];

function displayProducts() {
  const productContainer = document.querySelector(".section-2-containner");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<div class="section-2-item">
        <img src=${product.src}/
       <h5>${product.name} <br>₹${product.price}</h5>
       <button onclick = "addToCart(${product.id})">Add To Cart</button>
    </div>`;

    productContainer.appendChild(productDiv);
  });
}
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
    alert(`${product.name} has been added to your cart!`);
  }
}

function updateCart() {
  const cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<img src=${product.src}/<br> <br>
            <span>${product.name} - ₹${product.price}</span>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        <br><br>
        <button id="yo"> BUY NOW </button>   `;
    cartContainer.appendChild(cartItem);
  });
}
function removeFromCart(productId) {
  cart = cart.filter((product) => product.id !== productId);
  updateCart();
}
document.addEventListener("DOMContentLoaded", displayProducts);
