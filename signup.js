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

    if (this.checkValidity()) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const testPassword = "YourPassword123!";
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-_@$!%*?&]{8,}$/;

        console.log(passwordPattern.test(testPassword)); // Should return true if it meets the criteria

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

        Swal.fire({
            icon: 'success',
            title: 'Good Job!',
            text: 'Successfully created account.',
            timer: 2000, // 2 seconds
            timerProgressBar: true,
            willClose: () => {
                window.location.href = window.location.href;
            }
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Form',
            text: 'Please fill out all required fields correctly.',
        });
    }
});
