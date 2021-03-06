var email = document.querySelector("#emailId");
var userName = document.querySelector("#userNameId");
var password = document.querySelector("#passwordId");
var confirmPassword = document.querySelector("#ConfirmPasswordId");
var form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

function initalLoad() {
  let data = localStorage.getItem("data");

  if (!data) {
    let storage = [];

    localStorage.setItem("data", JSON.stringify(storage));
  }
}

initalLoad();

function isValidSubmit() {
  if (
    email.value.trim().length &&
    password.value.trim().length &&
    confirmPassword.value.trim().length
  ) {
    return true;
  }

  return false;
}

function isValid() {
  if (isValidSubmit()) {
  } else {
    alert("Please fill all fields");
    return;
  }

  if (password.value === confirmPassword.value) {
    return true;
  } else {
    alert("Password doesnt Match");
    return false;
  }
}

function handleSubmit(event) {
  event.preventDefault();
   
  if (isValid()) {
    var newUser = {
      email: email.value,
      userName:userName.value,
      password: password.value

    };
    var getData = JSON.parse(localStorage.getItem("data"));

    var isExits = getData.find(function (user) {
      return user.email==email.value && user.password==password.value && user.userName.value==userName.value
    });

    if(isExits){
        alert("User Already Exits Go to Login page")
        return;
    }
    
    getData.push(newUser);
    localStorage.setItem("data", JSON.stringify(getData));
    
    email.value = "";
    userName.value="";
    password.value = "";
    confirmPassword.value = "";
    swal({
      title: "Good job!",
      text: "Clicked on ok to continue",
      icon: "success",
    })
    .then((value) => {
      location.assign("login.html");
    });
  }
  
}
