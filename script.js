document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-box-login');
    const registerForm = document.querySelector('.form-box-registrer');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});
