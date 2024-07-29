document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');

    function validateForm() {
        if (email.value && password.value) {
            submitButton.disabled = false;
            submitButton.classList.remove('disabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('disabled');
        }
    }

    email.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);

    alert('Hey Its Foysal Ahmed')
});