function formatPhoneNumber(input) {
    let numbers = input.value.replace(/\D/g, '');
    
    let formattedNumber = numbers.slice(0, 3);
    if (numbers.length > 3) {
        formattedNumber += '-' + numbers.slice(3, 6);
    }
    if (numbers.length > 6) {
        formattedNumber += '-' + numbers.slice(6, 9);
    }
    
    input.value = formattedNumber;
}

function updateSpan() {
    const selectElement = document.getElementById("country");
    const selectedValue = selectElement.value;
    const inputLabel = selectElement.closest('.input-label');

    if (selectedValue === "") {
        inputLabel.classList.remove('active');
    } else {
        inputLabel.classList.add('active');
    }
}
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const inputLabel = emailInput.closest('.input-label');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        inputLabel.classList.add('valid');
        inputLabel.classList.remove('invalid');
    } else {
        inputLabel.classList.add('invalid');
        inputLabel.classList.remove('valid');
    }
}
document.getElementById('sigma-form').addEventListener('submit', function(event) {
    // First, prevent the default submission
    event.preventDefault();

    // Check if the form is valid (all required fields filled)
    if (this.checkValidity()) {
        // Perform custom email validation
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailInput.value)) {
            // If the email is valid, reload the page
            window.location.href = window.location.href; // Reload the current page
        } else {
            // If the email is invalid, show an alert
            alert('Please enter a valid email address.');
        }
    } else {
        // If the form is not valid, alert the user
        alert('Please fill out all required fields correctly.');
    }
});