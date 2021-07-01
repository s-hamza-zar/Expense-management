var email = document.querySelector("#emailId");
var password = document.querySelector("#passwordId");
var userName = document.querySelector("#userNameId");
var form = document.querySelector("#form");

form.addEventListener("submit", loginHandle);


function loginHandle(event) {
  event.preventDefault();

  var getData = JSON.parse(localStorage.getItem("data"));
  console.log(getData);
  var isExits = getData.find(function (user) {
    return user.email == email.value && user.password == password.value;
  });
  
  if (isExits) {
    var userInfo = {
      email: email.value,
      userName:userName.value,
      password: password.value
  
    };
    localStorage.setItem("loginUser", JSON.stringify(userInfo));
    location.assign("app.html");
    return;
  } else {
    alert("user not Exits Go to signup page");
  }
}
