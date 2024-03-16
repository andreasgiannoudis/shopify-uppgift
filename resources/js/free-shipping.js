// Function to update shipping options based on selected shipping method
function updateShippingOptions() {
    const selectedShippingMethod = document.querySelector('input[name="shipping_methods"]:checked');
    console.log(selectedShippingMethod);
    if (selectedShippingMethod) {
        const shippingMethodId = selectedShippingMethod.id;

        // Check if the selected shipping method ID contains "Free_Shipping"
        if (shippingMethodId.includes('Free_Shipping')) {
            // If free shipping is selected, hide non-free shipping options
            document.querySelectorAll('.B4zH6:not(.HKtYc)').forEach(option => {
                option.style.display = 'none'; // Hide non-free shipping options
            });
        } else {
            // If another shipping option is selected, show all options
            document.querySelectorAll('.B4zH6').forEach(option => {
                option.style.display = 'block'; // Show all shipping options
            });
        }
    }
}

// Listen for changes in the selected shipping method
document.querySelectorAll('input[name="shipping_methods"]').forEach(radio => {
    radio.addEventListener('change', updateShippingOptions);
});

// Call the function initially to set the initial state
updateShippingOptions();
