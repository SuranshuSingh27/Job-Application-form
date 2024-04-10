//Making a function to check validity of the name
function validateName() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;

    if (firstName.length < 5 || firstName.length > 12) {
        alert('First name should be between 5 and 12 characters.');
        return false;
    }

    if (lastName.length < 5 || lastName.length > 12) {
        alert('Last name should be between 5 and 12 characters.');
        return false;
    }
    return true;
}

//Making a function to check the validity of the email
function validateEmail(){
    const email=document.getElementById("email").value;
    if(!email.match(/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]{3}$/)){
        alert('Please enter the valid Email address')
    }else{
        document.getElementById("emailMsg").innerHTML="";
    }
}

//Making of the function to check the validity of pin code
function validateZip(){
    const zip=document.getElementById("pincode").value;
    if(!zip.match(/^[0-9]+$/)){
        alert('Enter the requiered format that must contain 6 digits')
    }else{
        document.getElementById("zipMsg").innerHTML="";
    }
}

//Making o the function to check the validity of Job Role
function validateRole(){
    const country=document.getElementById("job_role").value;
    if(country === ''){
        alert('please it is required field')
    }else{ 
        document.getElementById("countryMsg").innerHTML="";
    }
}

//Declaration of all the funcion

myForm.addEventListener("submit",(e)=>{
    
    validateName();
    validateEmail();
    validateZip();
    validateRole();
});

