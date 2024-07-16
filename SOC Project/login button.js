document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add your login logic here
        // Example: Display a message in the console
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log(`Login submitted with Username: ${username}, Password: ${password}`);

        // You can add further authentication logic or send the credentials to your server
        // ...

        // Close the login modal
        $('#loginModal').modal('hide');

        




    });
});
