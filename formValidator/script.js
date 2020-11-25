const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show Innput Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}

//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(username.value === '') {
    showError(username, 'Username is Required');
  } else {
    showSuccess(username);
  }
})

