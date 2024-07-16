document.addEventListener("DOMContentLoaded", function () {
    // Your existing code for fetching and displaying data

    // Add event listener for the form submission
    const editProductForm = document.getElementById('editProductForm');
    editProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values from the form
        const editProductId = document.getElementById('editProductId').value.trim();
        const editProductName = document.getElementById('editProductName').value.trim();
        const editSize = document.getElementById('editSize').value.trim();
        const editQuantity = parseInt(document.getElementById('editQuantity').value);
        const editPrice = document.getElementById('editPrice').value.trim();

        // Create an object with the updated product data
        const updatedProduct = {
            productId: editProductId,
            productName: editProductName,
            size: editSize,
            quantity: editQuantity,
            price: editPrice
        };

        // Send a PUT request to the server to update the product
        fetch(`https://localhost:7099/api/Product/${editProductId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Product updated:', data);

            // Optionally, you can update the table with the updated data
            const tableBody = document.querySelector('#productTable tbody');
            const rows = tableBody.getElementsByTagName('tr');

            for (let i = 0; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                if (cells.length > 0 && cells[0].textContent.trim() === editProductId) {
                    // Update the corresponding row with the new data
                    cells[1].textContent = data.productName.trim();
                    cells[2].textContent = data.size.trim();
                    cells[3].textContent = data.quantity;
                    cells[4].textContent = data.price.trim();
                    break;
                }
            }
        })
        .catch(error => console.error('Error updating product:', error));
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const updateProductForm = document.getElementById('updateProductForm');
//     const updateMessageDiv = document.getElementById('updateMessage');

    
//     window.searchProduct = function() {
//         const updateProductId = document.getElementById('updateProductId').value.trim();

       
//         fetch(`https://localhost:7099/api/Product/${updateProductId}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Product details received:', data);

           
//                 document.getElementById('updateProductName').value = data.productName;
//                 document.getElementById('updateSize').value = data.size;
//                 document.getElementById('updateQuantity').value = data.quantity;
//                 document.getElementById('updatePrice').value = data.price;

//                 updateMessageDiv.innerHTML = ''; 
//             })
//             .catch(error => {
//                 console.error('Error fetching product details:', error);
//                 updateMessageDiv.innerHTML = `<p>Error fetching product details. Please check the product ID and try again.</p>`;
//             });
//     };

//     updateProductForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const updateProductId = document.getElementById('updateProductId').value.trim();
//         const updateProductName = document.getElementById('updateProductName').value.trim();
//         const updateSize = document.getElementById('updateSize').value.trim();
//         const updateQuantity = parseInt(document.getElementById('updateQuantity').value);
//         const updatePrice = document.getElementById('updatePrice').value.trim();

        
//         const updatedProduct = {
//             productId: updateProductId,
//             productName: updateProductName,
//             size: updateSize,
//             quantity: updateQuantity,
//             price: updatePrice
//         };

        
//         fetch(`https://localhost:7099/api/Product/${updateProductId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedProduct)
//         })
//         .then(response => {
//             if (response.ok) {
               
//                 console.log('Product updated successfully.');
//                 updateMessageDiv.innerHTML = `<p>Product updated successfully.</p>`;
//             } else {
               
//                 console.error('Error updating product:', response.statusText);
//                 updateMessageDiv.innerHTML = `<p>Error updating product. Please check the product details and try again.</p>`;
//             }
//         })
//         .catch(error => {
//             console.error('Error updating product:', error);
//             updateMessageDiv.innerHTML = `<p>Error updating product. Please try again.</p>`;
//         });
//     });
// });
