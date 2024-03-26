import "./popup";

document.addEventListener('DOMContentLoaded', function() {
    var cartContainer = document.getElementById('cart-container');
    var cartProductsDiv = document.getElementById('cart-products');
    var checkoutButton = document.getElementById('checkout-button');
    
    
    function loadCartProducts() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(data => {
          
          cartProductsDiv.innerHTML = '';
          
          if (data.item_count > 0) {
            checkoutButton.style.display = 'block';
            
            data.items.forEach(item => {
              var productDiv = document.createElement('div');
              productDiv.classList.add('product-item'); 

              
              var productImage = document.createElement('img');
              productImage.src = item.image; 
              productImage.alt = item.title; 
              productImage.classList.add('product-image'); 
              
              
              productImage.style.maxWidth = '100px';
              productImage.style.maxHeight = '100px';
              


              
              
              var productName = document.createElement('span');
              productName.textContent = item.title ;

              
              productDiv.appendChild(productImage);
              productDiv.appendChild(productName);

              
              cartProductsDiv.appendChild(productDiv);
            });
          } else {
            checkoutButton.style.display = 'none';
          }
        });
    }

    
    function removeProduct(variantId) {
      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          id: variantId,
          quantity: 0
        })
      })
      .then(response => response.json())
      .then(data => {
        
        loadCartProducts();
      });
    }

    
    loadCartProducts();
    
   
    checkoutButton.addEventListener('click', function() {
      window.location.href = '/cart'; 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('.product-form__submit');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            
            setTimeout(function() {
                window.location.reload();
            }, 1000); 
        });
    }
});  

document.addEventListener('DOMContentLoaded', function() {
    var hideCartButton = document.getElementById('hide-cart-button');

    if (hideCartButton) {
        hideCartButton.addEventListener('click', function() {
            var cartContainer = document.getElementById('cart-container');
            cartContainer.style.display = 'none';
        });
    }
    var submitButton = document.querySelector('.product-form__submit');
    var tertiaryButton = document.querySelector('.button--tertiary');

    if (submitButton) {
        submitButton.addEventListener('click', reloadPageAfterDelay);
    }

    if (tertiaryButton) {
        tertiaryButton.addEventListener('click', reloadPageAfterDelay);
    }

    function reloadPageAfterDelay() {
        
        setTimeout(function() {
            window.location.reload();
        }, 1000);
    }
});


