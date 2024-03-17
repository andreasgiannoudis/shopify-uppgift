function updateShippingOptions() {
    //alert('before selected shipping method');
    const selectedShippingMethod = document.querySelector('input[name="shipping_methods"]:checked');
    //alert(selectedShippingMethod);
    if (selectedShippingMethod) {
        const shippingMethodId = selectedShippingMethod.id;


        if (shippingMethodId.includes('Free_Shipping')) {

            document.querySelectorAll('.B4zH6:not(.HKtYc)').forEach(option => {
                option.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.B4zH6').forEach(option => {
                option.style.display = 'block'; 
            });
        }
    }
}

document.querySelectorAll('input[name="shipping_methods"]').forEach(radio => {
    radio.addEventListener('change', updateShippingOptions);
});

updateShippingOptions();









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


// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.getElementById('ProductSubmitButton-template--15371227955302__main');
//     if (submitButton) {
//         submitButton.addEventListener('click', function() {
            
//             setTimeout(function() {
//                 window.location.reload();
//             }, 1000); 
//         });
//     }
// });  

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('ProductSubmitButton-template--15371227955302__main');
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
