document.addEventListener("DOMContentLoaded", function() {
  const popupContent = document.getElementById("popup-content");
  const closeButton = document.getElementById("close-button");
  let popupClosed = getCookie("popupClosed");
  if (!popupClosed || popupClosed !== "true") {
    showPopup();
  }
  function showPopup() {
    popupContent.style.display = "block";
  }
  function closePopup() {
    popupContent.style.display = "none";
    setCookie("popupClosed", "true", 1);
  }
  closeButton.addEventListener("click", closePopup);
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = /* @__PURE__ */ new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
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
  var submitButton = document.querySelector(".product-form__submit");
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
  var submitButton = document.querySelector(".product-form__submit");
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
