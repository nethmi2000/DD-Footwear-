document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API endpoint
    fetch('https://localhost:7099/api/Product')
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data);
            // Populate the table with the retrieved data
            const tableBody = document.querySelector('#productTable tbody');
            data.forEach(product => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = product.productId.trim(); // Trim whitespace
                row.insertCell(1).textContent = product.productName.trim(); // Trim whitespace
                row.insertCell(2).textContent = product.size.trim(); // Trim whitespace
                row.insertCell(3).textContent = product.quantity;
                row.insertCell(4).textContent = product.price.trim();    // Trim whitespace
              
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});