let form = document.querySelector("#myForm");
let nameInput =document.querySelector("#name");
let emailInput=document.querySelector("#email")
let numberInput=document.querySelector("#phoneno");
let passwordInput=document.querySelector("#password");
let confirmpass=document.querySelector("#confirmPassword")


form.addEventListener("submit",function(event){
  event.preventDefault();
  let nameValue=nameInput.value;
  let emailValue=emailInput.value;
  let numValue=numberInput.value;
  let passValue=passwordInput.value;
  let confirmValue=confirmpass.value;
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let phonePattern = /^\d{10}$/;
   let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  if(nameValue ===""){
    alert("Please enter your name")
    return;
  }

  if(emailValue ===""){
    alert("Please enter your email")
    return;
  }
if (!emailPattern.test(emailValue)) {
    alert("Invalid email");
    return;
}

if (!phonePattern.test(numValue)) {
    alert("Invalid phone number");
    return;
}


if(!passwordPattern.test(passValue)){
    alert("enter the  password minimum 8 letter At least 1 uppercase At least 1 lowercase At least 1 number ")
    return;
}

if(passValue !==confirmValue){
    alert("enter your confirm password")
    return;
}


alert("Registration added sussfully")
  
  



})