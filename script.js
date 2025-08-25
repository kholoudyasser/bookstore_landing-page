let cartCount = 0;
  const header = document.querySelector("header");
  const cartDisplay = document.createElement("div");
  cartDisplay.id = "cart";
  cartDisplay.style.marginLeft = "20px";
  cartDisplay.style.color = "#8b0000";
  cartDisplay.innerHTML = "🛒 0";
  header.appendChild(cartDisplay);

  
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartDisplay.innerHTML = `🛒 ${cartCount}`;
      alert("Added to cart successfully");
    });
  });
  const btn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};