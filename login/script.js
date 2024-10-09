
let log = document.getElementById('loginForm')
log.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'pass') {

        localStorage.setItem('authenticated', 'true');
        window.location.href = '../to-do/index.html';
    } 
    else {
        alert('Invalid credentials');
    }
});
