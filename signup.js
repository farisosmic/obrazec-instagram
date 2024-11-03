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
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const birthdayInput = document.getElementById('birthday');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-_@$!%*?&]{8,}$/;

    if (!emailPattern.test(emailInput.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
        });
        return;
    }
    if (!passwordPattern.test(passwordInput.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Weak Password',
            text: 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.',
        });
        return;
    }
    
    const selectedDate = new Date(birthdayInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const minAgeDate = new Date(today);
    minAgeDate.setFullYear(today.getFullYear() - 13);

    if (selectedDate > minAgeDate) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Date',
            text: 'Select an earlier date.',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'Successfully created account.',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
            window.location.reload();
        }
    });
});
