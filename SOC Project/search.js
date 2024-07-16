// document.addEventListener("DOMContentLoaded", function () {
//     function searchItem() {
//         const searchItemCode = document.getElementById('searchProduct').value.trim();

//         fetch(`https://localhost:7099/api/Product/${searchItemCode}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Product with ID ${searchItemCode} not found`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Data received for search:', data);

                
//                 const itemDetailsTable = document.getElementById('itemDetailsTable');
//                 itemDetailsTable.innerHTML = ''; 

//                 const row = itemDetailsTable.insertRow();
//                 row.insertCell(0).textContent = data.productId;
//                 row.insertCell(1).textContent = data.productName;
//                 row.insertCell(2).textContent = data.quantity;
//                 row.insertCell(3).textContent = data.size;
//                 row.insertCell(4).textContent = data.Price;
                
                
//             })
//             .catch(error => console.error('Error fetching data for search:', error));
//     }

//     window.searchItem = searchItem; 
// });

document.addEventListener("DOMContentLoaded", function () {
    function searchItem() {
        const searchItemCode = document.getElementById('searchItemCode').value.trim();

        // Fetch data for the specified item code
        fetch(`https://localhost:7099/api/Product/${searchItemCode}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data received for search:', data);

                // Display the item details in the table
                const itemDetailsTable = document.getElementById('itemDetailsTable');
                itemDetailsTable.innerHTML = ''; // Clear previous details

                const row = itemDetailsTable.insertRow();
                row.insertCell(0).textContent = data.productId;
                row.insertCell(1).textContent = data.productName;
                row.insertCell(2).textContent = data.size;
                row.insertCell(3).textContent = data.price;
                row.insertCell(4).textContent = data.quantity;
            })
            .catch(error => console.error('Error fetching data for search:', error));
    }

    window.searchItem = searchItem; // Expose the function globally for button click
});