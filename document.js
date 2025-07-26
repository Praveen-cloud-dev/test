document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Simple validation
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Example: send login data to server (replace URL with your endpoint)
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/dashboard';
                } else {
                    alert('Login failed: ' + (data.message || 'Invalid credentials.'));
                }
            })
            .catch(() => {
                alert('An error occurred. Please try again.');
            });
    });
});