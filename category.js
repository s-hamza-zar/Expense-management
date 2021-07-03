let userData = JSON.parse(localStorage.getItem("loginUser"));
let user = (document.getElementById(
  "userName"
).innerText = `Welcome ${userData.userName}`);
var form = document.querySelector("#form");
var tableBody = document.querySelector("#table-body");

function initalLoad() {
    let data = localStorage.getItem("Allcategory");
  
    if (!data) {
      let storage = [];
  
      localStorage.setItem("Allcategory", JSON.stringify(storage));
    }
  }
initalLoad();
var categoryData=JSON.parse(localStorage.getItem("Allcategory"))


function renderTable() {
  tableBody.innerHTML=""
  categoryData.map(function (item) {
    
    var tableRow = document.createElement("tr");
    var id = document.createElement("th");
    id.setAttribute("scope", "row");
    var cat = document.createElement("td");
    var date = document.createElement("td");
    tableRow.appendChild(id);
    tableRow.appendChild(cat);
    tableRow.appendChild(date);
    tableBody.appendChild(tableRow);
    id.innerHTML = item.id;
    cat.innerHTML = item.category;
    date.innerHTML = item.date;
  });
}
renderTable();
form.addEventListener("submit", categoryTable);
function categoryTable(event) {
  event.preventDefault();
  var inputCategory = document.getElementById("category-name");
  var allCategory = {
    id: Math.random(),
    category: inputCategory.value,
    date: new Date().toDateString(),
    
  };
  categoryData.push(allCategory)
  localStorage.setItem("Allcategory",JSON.stringify(categoryData))
  renderTable();
}
