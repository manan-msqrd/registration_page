var firstNameError = document.getElementById('first-name-error');
var lastNameError = document.getElementById('last-name-error');
var phoneError = document.getElementById('phone-error');
var addressError = document.getElementById('address-error');
var submitError = document.getElementById('submit-error');

function validateFirstName(){
    var firstName = document.getElementById('first-name').value;
    if(firstName.length == 0){
        firstNameError.innerHTML = 'First name is required';
        return false;
    }
    else if(!firstName.match(/^[A-Za-z]+$/)){
        firstNameError.innerHTML = 'Enter only alphabets';
        return false;
    }
    else{
        firstNameError.innerHTML = '';
        return true;
    }
}
function validateLastName(){
    var lastName = document.getElementById('last-name').value;
    if(lastName.length == 0){
        lastNameError.innerHTML = 'Last name is required';
        return false;
    }
    else if(!lastName.match(/^[A-Za-z]+$/)){
        lastNameError.innerHTML = 'Enter only alphabets';
        return false;
    }
    else{
        lastNameError.innerHTML = '';
        return true;
    }
}

function validatePhone(){
    var phone = document.getElementById('phone-number').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    else if(phone.length != 10){
        phoneError.innerHTML = 'Enter 10 digits';
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    else{
        phoneError.innerHTML = '';
        return true;
    }
}

function validateAddress(){
    var address = document.getElementById('address').value;
    var max = 200;
    var left = max - address.length;

    if(left<=0){
        addressError.innerHTML = "Maximum limit 200";
        return false;
    }

    else{
        addressError.innerHTML = left + " characters";
        return true;
    }
   
}

function validateForm(){
    if(!validateFirstName() || !validateLastName() || !validateAddress() || !validatePhone()){
        submitError.innerHTML = "Please fill all required fields to submit"
        return false;
    }

}