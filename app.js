
var userName = document.getElementById("userName")
var email = document.getElementById("email")
var age = document.getElementById("age")
var password = document.getElementById("password")
var contactno = document.getElementById("contactno")
var cnic = document.getElementById("cnic")


var userNameError = document.getElementById("userNameError")
var emailError = document.getElementById("emailError")
var ageError = document.getElementById("ageError")
var passwordError = document.getElementById("passwordError")
var contactError = document.getElementById("contactError")


function submit(){
    var hasError = false

    // name
    if (userName.value == "") {
        userNameError.innerText = "Please enter username"   
        var hasError = true
    }
    else if (userName.value.length < 5) {
        userNameError.innerText = "Must greater than 5 number"
           var hasError = true
        
    }
    else{
        userNameError.innerText = ""
           var hasError = false
    }

    // email

    if (email.value == "") {
        emailError.innerText = "Please Enter Email Address"
          var hasError = true
        
    }
    else if (!email.value.includes("@")){
        emailError.innerText = "please enter valid email"
          var hasError = true
    }
    else{
        emailError.innerText = ""
          var hasError = false
    }


    // age

    if (age.value == 0 ) {
        ageError.innerText = "Please enter your age"
          var hasError = true
        
    }
    else if (age.value < 18) {
        ageError.innerText = "You are not eligible"
          var hasError = true
        
    }
    else{
        ageError.innerText = ""
          var hasError = false
    }
    
    // password
    if (password.value = "") {
        passwordError.innerText = "Please enter password"
          var hasError = true
        
        
    }
    else if (password.value.length < 8 ){
        
        passwordError.innerText = "Password must be greater than 8 letters"
          var hasError = true
    }
    
    else{
        passwordError.innerText = ""
          var hasError = false
    }
    
}


    // contact number
    if (contactno.value == 0 ) {
        contactError.innerText = "Please Enter your number"
          var hasError = true
    }

   else if (contactno.value.length < 11) {
        contactError.innerText = "Please enter valid number"
          var hasError = true
        
    }
    else{
        contactError.innerText = ""
          var hasError = false
    }
    if (hasError == false) {
        var cnic = (Math.random()*10000000000000).tofixed()
        
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