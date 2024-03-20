document.addEventListener("DOMContentLoaded", function() {
  var popupContent = document.getElementById("popup-content");
  var closeButton = document.getElementById("close-button");
  if (!sessionStorage.getItem("popupClosed")) {
    showPopup();
  }
  function showPopup() {
    popupContent.style.display = "block";
  }
  function closePopup() {
    popupContent.style.display = "none";
    sessionStorage.setItem("popupClosed", true);
  }
  closeButton.addEventListener("click", closePopup);
  window.addEventListener("beforeunload", function() {
    if (window.location.pathname !== "/") {
      sessionStorage.removeItem("popupClosed");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("cart-container");
  var cartProductsDiv = document.getElementById("cart-products");
  var checkoutButton = document.getElementById("checkout-button");
  function loadCartProducts() {
    fetch("/cart.js").then((response) => response.json()).then((data) => {
      cartProductsDiv.innerHTML = "";
      if (data.item_count > 0) {
        checkoutButton.style.display = "block";
        data.items.forEach((item) => {
          var productDiv = document.createElement("div");
          productDiv.classList.add("product-item");
          var productImage = document.createElement("img");
          productImage.src = item.image;
          productImage.alt = item.title;
          productImage.classList.add("product-image");
          productImage.style.maxWidth = "100px";
          productImage.style.maxHeight = "100px";
          var productName = document.createElement("span");
          productName.textContent = item.title;
          productDiv.appendChild(productImage);
          productDiv.appendChild(productName);
          cartProductsDiv.appendChild(productDiv);
        });
      } else {
        checkoutButton.style.display = "none";
      }
    });
  }
  loadCartProducts();
  checkoutButton.addEventListener("click", function() {
    window.location.href = "/cart";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById("ProductSubmitButton-template--15371227955302__main");
  if (submitButton) {
    submitButton.addEventListener("click", function() {
      setTimeout(function() {
        window.location.reload();
      }, 1e3);
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var hideCartButton = document.getElementById("hide-cart-button");
  if (hideCartButton) {
    hideCartButton.addEventListener("click", function() {
      var cartContainer = document.getElementById("cart-container");
      cartContainer.style.display = "none";
    });
  }
  var submitButton = document.getElementById("ProductSubmitButton-template--15371227955302__main");
  var tertiaryButton = document.querySelector(".button--tertiary");
  if (submitButton) {
    submitButton.addEventListener("click", reloadPageAfterDelay);
  }
  if (tertiaryButton) {
    tertiaryButton.addEventListener("click", reloadPageAfterDelay);
  }
  function reloadPageAfterDelay() {
    setTimeout(function() {
      window.location.reload();
    }, 1e3);
  }
});
