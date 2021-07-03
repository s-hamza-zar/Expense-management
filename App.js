
var userData=JSON.parse(localStorage.getItem("loginUser"))
let user=document.getElementById('userName').innerText=`Welcome ${userData.userName}`
