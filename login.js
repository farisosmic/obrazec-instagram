document.getElementById('sigma-form').addEventListener('submit', function(event) {
    event.preventDefault();

    Swal.fire({
        icon: 'success',
        title: 'Logged In Successfully!',
        text: 'Welcome back!',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
            window.location.reload();
        }
    });
});