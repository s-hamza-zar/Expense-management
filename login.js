var email = document.querySelector("#emailId");
var password = document.querySelector("#passwordId");
var form = document.querySelector("#form");


form.addEventListener("submit",loginHandle);

function initalLoad() {
    let userData = localStorage.getItem("userData");
      
    if (!userData) {
      let storage = [];
      localStorage.setItem("userData", JSON.stringify(storage));
        }
      }

initalLoad();

function loginHandle(event){
    event.preventDefault();

    var getData = JSON.parse(localStorage.getItem("data"));
    console.log(getData)
    var isExits = getData.find(function (user) {

    return user.email==email.value && user.password==password.value 
          });
    if(isExits){
        location.replace("app.html")
            return;
        }
    else{
    alert("user not Exits Go to signup page")
    }
    }
