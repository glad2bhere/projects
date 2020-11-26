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
function checkEmail(input) {
  const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

//Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    };
  });
}

//Check Password Input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be no more than ${max} characters`);
  } else {
    showSuccess(input)
  }
}

//Make sure passwords match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}


//Get fieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});



/* These were refactored to the above code
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
}); */

