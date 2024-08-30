//save references for each form element
const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents form from submitting, since we want to validate our inputs

    validateInputs();
});

//recieve HTML element and an error message
const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    //adds red border to input field
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    //get value of all input fields
    const usernameValue = username.value.trim() //use trim to remove whitespace that string has
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    //check each input field value and see if its valid
    if (usernameValue === '') {
        setError(username, 'Username is required')
    }
    else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, 'Email is required')
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    }
    else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        setError(password, 'Password is required')
    }
    else if (passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 characters')
    }
    else {
        setSuccess(password)
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password')
    }
    else if (password2Value !== passwordValue) {
        setError(password2, 'Passwords do not match')
    }
    else {
        setSuccess(password2)
    }

}
