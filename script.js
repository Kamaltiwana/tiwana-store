let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, size) {
  cart.push({name, price, size});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
