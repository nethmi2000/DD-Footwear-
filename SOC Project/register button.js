document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add your registration logic here
        // Example: Display a message in the console
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        console.log(`Registration submitted with Username: ${username}, Email: ${email}, Password: ${password}`);

        // You can add further registration logic or send the registration data to your server
        // ...

        // Close the register modal
        $('#registerModal').modal('hide');
    });
});
