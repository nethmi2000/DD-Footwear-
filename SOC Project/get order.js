// document.addEventListener("DOMContentLoaded", function () {
    
//     fetch('https://localhost:7099/api/Order')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Data received:', data);
            
//             const tableBody = document.querySelector('#orderTable tbody');
//             data.forEach(Order => {
//                 const row = tableBody.insertRow();
//                 row.insertCell(0).textContent = Order.OrderId; 
//                 row.insertCell(1).textContent = Order.UserId; 
//                 row.insertCell(2).textContent = Order.ProductId 
//                 row.insertCell(3).textContent = Order.Quantity;
//                 row.insertCell(4).textContent = Order.Price;    
              
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

document.addEventListener("DOMContentLoaded", function () {
    
    function viewOrders() {
       
        fetch('https://localhost:7099/api/Order')
            .then(response => response.json())
            .then(data => {
                
                const orderTableBody = document.getElementById('orderTableBody');
                orderTableBody.innerHTML = '';

                data.forEach(order => {
                    const row = orderTableBody.insertRow();
                    row.insertCell(0).textContent = order.OrderId.toString(); 
                    row.insertCell(1).textContent = order.UserId;
                    row.insertCell(2).textContent = order.ProductId;
                    row.insertCell(3).textContent = order.Quantity.toString(); 
                    row.insertCell(4).textContent = order.Price;
                });
            })
            .catch(error => console.error('Error fetching order details:', error));
    }

    
    viewOrders();
});