var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");
var gender = document.querySelector('input[type=radio][name=gender]:checked');

var firstName2 = document.getElementById("firstName2");
var lastName2 = document.getElementById("lastName2");
var age2 = document.getElementById("lage2");
var submitBtn = document.getElementById("submit-btn");
// var gender = document.getElementsByName("gender2");


var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

// ===== Submit Button disable ===== //
submitBtn.disabled = "true";


// ===== Input Validator ===== //
let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false
};



firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)


function buttonRelease(){

    console.log(inputValidator);

    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
     console.log(result);
    if(result){

        submitBtn.removeAttribute("disabled");
        console.log("Submit button active");
    }
    else{
        submitBtn.disabled = "true";
        console.log("Submit button not active");
    }
}

// ===== Validating First Name ===== //
function validateFirstName() {

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        inputValidator.firstn = true;        
        buttonRelease();
    }
    else {

        invalid(firstName);
        inputValidator.firstn = false;

    }
}

// ===== Validating Second Name ===== //
function validateLastName() {

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        inputValidator.lastn = true;        
        buttonRelease();
        
    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;

    }

}

// ===== Validating Age ===== //
function validateAge() {

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        inputValidator.ageperson = true;    
        buttonRelease();
        
    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        buttonRelease();

    }

}

// ===== Validating Email ===== //
function validateEmail() {

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;        
        buttonRelease();
        
    }
    else {

        invalid(email);
        inputValidator.emailid = false;

    }

}

// ===== Validating Phone Number ===== //
function validatePhoneNo() {

    console.log(phoneno.value);

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        inputValidator.phonenumber = true;        
        buttonRelease();
        
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;

    }

}

// ===== Box border turns green for valid entry ===== //
function valid(element){

    element.style.borderColor = "green";
    element.style.borderWidth = "thin thick";

}

// ===== Box border turns red for invalid entry ===== //
function invalid(element){

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";

}

// ===== Values get stored in LocalStorage ===== //
function passvalues() {

    console.log("function running");
    
    localStorage.setItem("firstName",firstName.value);
    
    localStorage.setItem("lastName",lastName.value);
    
    localStorage.setItem("age",age.value);
    

    localStorage.setItem("emailAddress",email.value);
       
    localStorage.setItem("phoneNo",phoneno.value);


    var radios = document.getElementsByName('gender');
        for (var radio of radios)
        {
            if (radio.checked) {
                localStorage.setItem("gend",radio.value); 
            }
        }

}

// ===== Form 2 values ===== //
function buttonpress() {
    console.log("asdasdasdas");

    passvalues();

    var radios = document.getElementsByName('gender2');
        for (var radio of radios)
        {
            if (radio.checked) {
                localStorage.setItem("gend2",radio.value); 
            }
        }

   

    localStorage.setItem("firstName2",firstName2.value);
    
    localStorage.setItem("lastName2",lastName2.value);
    
    localStorage.setItem("age2",age2.value);
}


function visibleform() {
    var spform = document.getElementById("form2");
    
    spform.style.display = "block";
}