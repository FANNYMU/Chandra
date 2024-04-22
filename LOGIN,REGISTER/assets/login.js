        // Ambil form login
        const loginForm = document.getElementById('loginForm');

        // Event listener untuk submit form
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dari aksi default (submit)

            // Ambil nilai dari input username dan password
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Cek jika username dan password sesuai
            if (username === 'admin' && password === 'password') {
                // Simpan informasi login ke localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);

                // Redirect ke halaman dashboard atau halaman setelah login
                window.location.href = 'dashboard.html';
            } else {
                alert('Username atau password salah!');
            }
        });