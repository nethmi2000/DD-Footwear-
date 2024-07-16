document.addEventListener("DOMContentLoaded", function () {
    const userListElement = document.getElementById('userList');

    // Fetch the list of users from the server API
    fetch('https://localhost:7099/api/User')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user list: ${response.statusText}`);
            }
            return response.json();
        })
        .then(users => {
            console.log('User list received:', users);

            // Display the list of users in the HTML
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `User ID: ${user.userId}, Name: ${user.userName}, Email: ${user.email}`;
                userListElement.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching user list:', error);

            // Display an error message in case of any issues
            const errorElement = document.createElement('li');
            errorElement.textContent = `Error: ${error.message}`;
            userListElement.appendChild(errorElement);
        });
});
