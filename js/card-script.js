var email = document.forms['myForm']['txtEmail'];
var password = document.forms['myForm']['txtPass'];
var confPass = document.forms['myForm']['txtConfPass'];
var address = document.forms['myForm']['txtAddress'];
var rbMale = document.forms['myForm']['rbMale'];
var rbFemale = document.forms['myForm']['rbFemale'];
var dob = document.forms['myForm']['txtDOB'];

function checkEmail() {
    var error = document.getElementById('errEmail');

    if (email.value == "") {
        error.innerHTML = "Email must be filled!";
        return false;
    }
    else if (email.value.search('@') == -1 || email.value.search('.') == -1) {
        error.innerHTML = "Email format is incorrect!";
        return false;
    }
    else if (email.value.indexOf('@') == 0 || email.value.indexOf('@') == email.value.length-1) {
        error.innerHTML = "Email format is incorrect!";
        return false;
    }
    else if (email.value.indexOf('.') == 0 || email.value.indexOf('.') == email.value.length-1) {
        error.innerHTML = "Email format is incorrect!";
        return false;
    }
    else if (email.value.indexOf('@') > email.value.indexOf('.')) {
        error.innerHTML = "Email format is incorrect!";
        return false;
    }
    else if (email.value.indexOf('@') + 1 == email.value.indexOf('.')) {
        error.innerHTML = "Email format is incorrect!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function checkUpper() {
    var i;
    for (i=0;i<password.value.length;i++) {
        if (password.value.charCodeAt(i) >= 65 && password.value.charCodeAt(i) <= 90) {
            return true;
        }
    }

    return false;
}

function checkDigit() {
    var i;
    for (i=0;i<password.value.length;i++) {
        if (password.value.charCodeAt(i) >= 48 && password.value.charCodeAt(i) <= 57) {
            return true;
        }
    }

    return false;
}

function checkPassword() {
    var error = document.getElementById("errPass");

    if (password.value == "") {
        error.innerHTML = "Password must be filled!";
        return false;
    }
    else if (password.value.length < 6 || password.value.length > 15) {
        error.innerHTML = "Password length must be between 6 and 15 characters!";
        return false;
    }
    else if (!checkUpper()) {
        error.innerHTML = "Password must contain at least one upper case letter!";
        return false;
    }
    else if (!checkDigit()) {
        error.innerHTML = "Password must contain at least one digit!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function checkConfPassword() {
    var error = document.getElementById("errConfPass");

    if (confPass.value == "") {
        error.innerHTML = "Confirm Password must be filled!";
        return false;
    }
    else if (confPass.value != password.value) {
        error.innerHTML = "Confirm Password and Password do not match!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function checkAddress() {
    var error = document.getElementById("errAddress");

    if (address.value == "") {
        error.innerHTML = "Address must be filled!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function checkGender() {
    var error = document.getElementById("errGender");

    if (rbMale.checked == false && rbFemale.checked == false) {
        error.innerHTML = "Gender must be chosen!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function checkDateDigits() {
    var i;
    for (i=0;i<dob.value.length;i++) {
        if (i != 4 && i != 7) {
            if (dob.value.charCodeAt(i) < 48 || dob.value.charCodeAt(i) > 57) {
                return false;
            }
        }
    }

    return true;
}

function checkDateRange() {
    var parts = dob.value.split('/');
    var years = parseInt(parts[0]);
    var months = parseInt(parts[1]);
    var days = parseInt(parts[2]);

    if (years > 2019) {
        return false;
    }

    if (months > 12) {
        return false;
    }
    
    if (months == 2) {
        if (days > 29) {
            return false;
        }
    }
    else if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12) {
        if (days > 31) {
            return false;
        }
    }
    else if (months == 4 || months == 6 || months == 9 || months == 11) {
        if (days > 30) {
            return false;
        }
    }

    return true;
}

function checkDOB() {
    var error = document.getElementById("errDOB");
    
    if (dob.value == "") {
        error.innerHTML = "Date of Birth must be filled!";
        return false;
    }
    else if (dob.value.length != 10) {
        error.innerHTML = "Date of Birth format is incorrect!";
        return false;
    }
    else if (dob.value.indexOf('/') != 4 || dob.value.indexOf('/', 5) != 7) {
        error.innerHTML = "Date of Birth format is incorrect!";
        return false;
    }
    else if (!checkDateDigits()) {
        error.innerHTML = "Date of Birth is invalid!";
        return false;
    }
    else if (!checkDateRange()) {
        error.innerHTML = "Date of Birth is invalid!";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate() {
    var correct = true;

    if (!checkEmail()) {
        correct = false;
    }

    if (!checkPassword()) {
        correct = false;
    }

    if (!checkConfPassword()) {
        correct = false;
    }

    if (!checkAddress()) {
        correct = false;
    }

    if (!checkGender()) {
        correct = false;
    }

    if (!checkDOB()) {
        correct = false;
    }

    return correct;
}