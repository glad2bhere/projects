const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show Input Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerHTML = message;
}

//Make sure email is a valid email address
function isValidEmail(email) {
  const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(String(email).toLowerCase);
}

//Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(username.value === '') {
    showError(username, 'Username is Required');
  } else {
    showSuccess(username);
  }

  if(email.value === '') {
    showError(email, 'Email is Required');
  } else if(!isValidEmail(email.value)) {
    showError(email, 'Email is Not Valid')
  } else {
    showSuccess(email);
  }

  if(password.value === '') {
    showError(password, 'Password is Required');
  } else {
    showSuccess(password);
  }

  if(password2.value === '') {
    showError(password2, 'Password is Required');
  } else {
    showSuccess(password2);
  }
})

