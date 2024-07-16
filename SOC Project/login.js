// // document.addEventListener("DOMContentLoaded", function () {
// //     const loginForm = document.getElementById('loginForm');

// //     loginForm.addEventListener('submit', function (event) {
// //         event.preventDefault();

// //         // Get input values from the form
// //         const email = document.getElementById('email').value.trim();
// //         const password = document.getElementById('password').value.trim();

// //         // Create an object with the user login data
// //         const userLogin = {
// //             Email: email,
// //             Password: password
// //         };

// //         // Send a POST request to the server to perform user login
// //         fetch('https://localhost:7099/api/User/Login', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(userLogin)
// //         })
// //         .then(response => {
// //             if (response.ok) {
// //                 // Successful login
// //                 alert('Login successful. Welcome!');
// //                 loginForm.reset(); // Clear the form
// //             } else {
// //                 // Handle errors
// //                 alert('Error logging in. Please check your credentials and try again.');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error logging in:', error);
// //             alert('Error logging in. Please try again.');
// //         });
// //     });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //     const loginForm = document.getElementById('loginForm');

// //     loginForm.addEventListener('submit', function (event) {
// //         event.preventDefault();

// //         // Get input values from the form
// //         const email = document.getElementById('email').value.trim();
// //         const password = document.getElementById('password').value.trim();

// //         // Check admin credentials
// //         if (email === 'admin@gmail.com' && password === '12345') {
// //             // Successful login
// //             alert('Login successful. Welcome, Admin!');
// //             loginForm.reset(); // Clear the form
// //         } else {
// //             // Invalid credentials
// //             alert('Invalid email or password. Please try again.');
// //         }
// //     });
// // });



// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById('loginForm');

//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Get input values from the form
//         const email = document.getElementById('email').value.trim();
//         const password = document.getElementById('password').value.trim();

//         // Check if the user is an admin
//         if (email === 'admin@gmail.com' && password === '12345') {
//             // Admin login
//             alert('Admin login successful. Welcome, Admin!');
//         } else {
//             // Regular user login
//             // Create an object with the user login data
//             const userLogin = {
//                 Email: email,
//                 Password: password
//             };

            
            

//             // Send a POST request to the server to perform user login
//             fetch('https://localhost:7099/api/User/Login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(userLogin)
//             })
//             .then(response => {
//                 if (response.ok) {
//                     // Successful login
//                     alert('User login successful. Welcome!');
//                 } else {
                    
//                     // Handle errors
//                     alert('Error logging in. Please check your credentials and try again.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error logging in:', error);
//                 alert('Error logging in. Please try again.');
//             });
//         }

//         loginForm.reset(); // Clear the form
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const formData = new FormData(loginForm);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        
        const loginEndpoint = 'https://localhost:7099/api/User'; 

        
        fetch(loginEndpoint)
            .then(response => response.json())
            .then(users => {
                
                const matchedUser = users.find(user => user.email === userData.Email && user.password === userData.Password);

                const adminCredentials = {
                    email: 'admin@gmail.com',
                    password: '1234'
                };

                const sellerCredentials = {
                    email: 'sell1@gmail.com', 
                    password: '1234'
                };

                if (matchedUser) {
                    console.log('Login successful:', matchedUser);
                    window.location.href = 'usersDashboard.html';
                    
                } else if (userData.Email === adminCredentials.email && userData.Password === adminCredentials.password) {
                    console.log('Admin login successful');
                    window.location.href = 'admin.html';
                    
                } else if (userData.Email === sellerCredentials.email && userData.Password === sellerCredentials.password) {
                    console.log('seller login successful');
                    window.location.href = '3partyseller.html';
                    
                } else {
                    console.log('Invalid email or password');
                    
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    });
});






















