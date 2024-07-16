document.addEventListener("DOMContentLoaded", function () {
    
    
    const addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const productId =document.getElementById('productId').value.trim();
        const productName = document.getElementById('productName').value.trim();
        const size = document.getElementById('size').value.trim();
        const quantity = parseInt(document.getElementById('quantity').value);
        const price = document.getElementById('price').value.trim();

       
        const newProduct = {
            productId: productId,
            productName: productName,
            size: size,
            quantity: quantity,
            price: price
        };

       
        fetch('https://localhost:7099/api/Product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => {
            console.log('New product added:', data);

            
            const tableBody = document.querySelector('#productTable tbody');
            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = data.productId.trim();
            newRow.insertCell(1).textContent = data.productName.trim();
            newRow.insertCell(2).textContent = data.size.trim();
            newRow.insertCell(3).textContent = data.quantity;
            newRow.insertCell(4).textContent = data.price.trim();
        })
        // .catch(error => console.error('Error adding new product:', error));
    });
});


