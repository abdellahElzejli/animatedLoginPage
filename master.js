const container = document.querySelector('#container');
const registration  = document.querySelector('#registre');
const loginBtn = document.querySelector('#login');

registration.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});