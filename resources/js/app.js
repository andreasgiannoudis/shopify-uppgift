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
