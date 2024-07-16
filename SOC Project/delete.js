document.addEventListener("DOMContentLoaded", function () {
    const deleteProductForm = document.getElementById('deleteProductForm');
    const deleteMessageDiv = document.getElementById('deleteMessage');

    deleteProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input value (product ID) from the form
        const deleteProductId = document.getElementById('deleteProductId').value.trim();

        // Send a DELETE request to the server to delete the specific product
        fetch(`https://localhost:7099/api/Product/${deleteProductId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Successful deletion
                console.log('Product deleted successfully.');
                deleteMessageDiv.innerHTML = `<p>Product deleted successfully.</p>`;
            } else {
                // Handle errors
                console.error('Error deleting product:', response.statusText);
                deleteMessageDiv.innerHTML = `<p>Error deleting product. Please check the product ID and try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            deleteMessageDiv.innerHTML = `<p>Error deleting product. Please try again.</p>`;
        });
    });
});
