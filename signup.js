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
    const selectElement = document.getElementById("country"); // Adjusted to match your select element's ID
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
    const emailInput = document.getElementById('email');
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    
    if (!isEmailValid) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});