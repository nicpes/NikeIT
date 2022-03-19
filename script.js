function showHideSignin() {
    let signin = document.getElementById('signin');

    if(signin.style.display == "block") {
        signin.style.display = "none";
    } else {
        signin.style.display = "block";
    }
}

function submit() {
    let email = document.getElementById('signin-email');
    let password = document.getElementById('signin-password');

    if (email.value != '') {
        console.log('E-mail: ' + email.value);
    }

    if (password.value != '') {
        console.log('Password: ' + password.value);
    }
}