document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Perform login authentication using AJAX
    // Add your logic to redirect to receptionist or doctor portal based on role
});