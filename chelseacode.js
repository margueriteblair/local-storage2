document.getElementById('greeting').innerText = 'Welcome!';
document.getElementById('slogan').innerText = "You've Got Mail!";

function submitLoginInfo() {
    localStorage.setItem('emailLogIn', document.getElementById('eAddress').value);
    document.getElementById('emailDisplay').innerText = localStorage.getItem('emailLogIn');

    localStorage.setItem('passwordLogIn', document.getElementById('pWord').value);
    document.getElementById('passwordDisplay').innerText = localStorage.getItem('passwordLogIn');
}

document.getElementById('emailDisplay').innerText = localStorage.getItem('emailLogIn');
document.getElementById('passwordDisplay').innerText = localStorage.getItem('passwordLogIn');
