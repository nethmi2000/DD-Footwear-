document.addEventListener("DOMContentLoaded", function () {
    function fetchOrderStatus(orderId) {
        fetch(`https://localhost:7099/api/OrderStatus/${orderId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch order status for Order ID ${orderId}`);
                }
                return response.json();
            })
            .then(orderStatus => {
                console.log('Order Status received:', orderStatus);

                const orderStatusDiv = document.getElementById('orderStatus');
                orderStatusDiv.innerHTML = '';

                const statusText = document.createElement('p');
                statusText.textContent = `Order ID ${orderId} Status: ${orderStatus}`;
                orderStatusDiv.appendChild(statusText);
            })
            .catch(error => console.error(`Error fetching order status for Order ID ${orderId}:`, error));
    }

    // Replace '1' with the actual Order ID you want to fetch the status for
    const orderId = 1;
    fetchOrderStatus(orderId);
});
