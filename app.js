
var userName = document.getElementById("userName")
var email = document.getElementById("email")
var age = document.getElementById("age")
var password = document.getElementById("password")
var contactno = document.getElementById("contactno")
var cnic = document.getElementById("cnic")


// var userNameError = document.getElementById("userNameError")
// var emailError = document.getElementById("emailError")
// var ageError = document.getElementById("ageError")
// var passwordError = document.getElementById("passwordError")
// var contactError = document.getElementById("contactError")


function submit(){
    if (userName.value == "") {
        userNameError.innerText = "Please enter username"   
    }
    else if (userName.value.length < 5) {
        userNameError.innerText = "Must greater than 5 number"
        
    }
    else{
        userNameError.innerText = ""
    }

    if (email.value == "") {
        emailError.innerText = "Please Enter Email Address"
        
    }
    else if (!email.value.includes("@")){
        emailError.innerText = "please enter valid email"
    }
    else{
        emailError.innerText = ""
    }


    // age

    if (age.value == 0 ) {
        ageError.innerText = "Please enter your age"
        
    }
    else if (age.value < 18) {
        ageError.innerText = "You are not eligible"
        
    }
    else{
        ageError.innerText = ""
    }

}



// console.log(userName)
// console.log(email)
// console.log(password)
// console.log(age)
// console.log(cnic)


// console.log(userNameError)
// console.log(emailError)
// console.log(passwordError)
// console.log(ageError)
// console.log(contactnoError)