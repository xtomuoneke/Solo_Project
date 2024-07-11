const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const numberEl = document.getElementById('number');
const passwordEl = document.getElementById('password');
const password2El = document.getElementById('password2');

formEl.addEventListener('submit', e => {
  console.log('hello')
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  errorDisplay.style.fontSize = '15px';
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    setError(usernameEl, 'Username is required');
  }else{
    setSuccess(usernameEl);
  }

  if(emailValue === '') {
    setError(emailEl, 'Email is required');

  }else if(!isValidEmail(emailValue)) {
    setError(emailEl,'Provide a valid email address');

  }else{
    setSuccess(emailEl);
  }

  if(numberValue === '') {
    setError(numberEl, 'Your phone number is required');
  }else if(numberValue.length <= 10){
    setError(numberEl, 'Your phone number must be up to eleven digits');
  }else if(numberValue.length >= 12){
    setError(numberEl, 'Your phone number must not exceed eleven digits');
  }else{
    setSuccess(numberEl);
  }
  if(passwordValue === '') {
    setError(passwordEl, 'Password is required');
  }else if(passwordValue.length < 8) {
    setError(passwordEl, 'Password must be at least 8 characters');
  }else{
    setSuccess(passwordEl);
  }

  if(password2Value === '') {
    setError(password2El, 'Please confirm your password');

  }else if(password2Value !== passwordValue) {
    setError(password2El, 'Passwords does not match');
  }else{
    setSuccess(password2El);
  }


};
