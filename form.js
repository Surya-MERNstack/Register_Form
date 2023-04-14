// const myForm = document.getElementById("myForm");
// const myTable = document.getElementById("myTable");

// myForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   const firstName = formData.get("firstName");
//   const lastName = formData.get("lastName");
//   const address = formData.get("address");
//   const pincode = formData.get("pincode");
//   const gender = formData.get("gender");
//   const food = formData.getAll("food");
//   const state = formData.get("state");
//   const country = formData.get("country");

//   const newRow = myTable.insertRow(-1);
//   const firstNameCell = newRow.insertCell(0);
//   const lastNameCell = newRow.insertCell(1);
//   const addressCell = newRow.insertCell(2);
//   const pincodeCell = newRow.insertCell(3);
//   const genderCell = newRow.insertCell(4);
//   const foodCell = newRow.insertCell(5);
//   const stateCell = newRow.insertCell(6);
//   const countryCell = newRow.insertCell(7);

//   firstNameCell.innerHTML = firstName;
//   lastNameCell.innerHTML = lastName;
//   addressCell.innerHTML = address;
//   pincodeCell.innerHTML = pincode;
//   genderCell.innerHTML = gender;
//   foodCell.innerHTML = food.join(", ");
//   stateCell.innerHTML = state;
//   countryCell.innerHTML = country;


//   myForm.reset();
// });


//  let list1 = [];
//  let list2 = [];
//  let list3 = [];
//  let list4 = [];
//  let list5 = [];
//  let list6 = []
// let list7 = [];
// let list8 = [];

//  let n = 1;
//  let x = 0;

//  function AddRow() {
//     let AddRown = document.getElementById('show');
//     let NewRow = AddRown.insertRow(n);

//     list1[x] =document.getElementById('fname').value;
//     list2[x] =document.getElementById('lname').value;
//     list3[x] =document.getElementById('gender').value;
//     list7[x] =document.getElementById('food').value;
//    list4[x]=document.getElementById('vada').value;
//     list5[x] =document.getElementById('state').value;
//    list6[x] =document.getElementById('address').value;
   

//    let cel1 = NewRow.insertCell(0);
//    let cel2 = NewRow.insertCell(1);
//    let cel3 = NewRow.insertCell(2);
//    let cel4 = NewRow.insertCell(3,6);
//    let cel5 = NewRow.insertCell(4);
//    let cel6 = NewRow.insertCell(5);
//    // let cel7 = NewRow.insertCell(6);


//     cel1.innerHTML = list1[x];
//     cel2.innerHTML = list2[x];
//     cel3.innerHTML = list3[x],list7[x];
//     cel4.innerHTML = list4[x];
//     cel5.innerHTML = list5[x];
//     cel6.innerHTML = list6[x];

 

//     n++;
//     x++;

//  }
 


   
// function AddRow() {
//    var table = document.getElementById("myTable");
//    var row = table.insertRow(1);
//    var cell1 = row.insertCell(0);
//    var cell2 = row.insertCell(1);
//    var cell3 = row.insertCell(2);
//    var cell4 = row.insertCell(3);
//    var cell5 = row.insertCell(4);
//    var cell6 = row.insertCell(5);
//    var cell7 = row.insertCell(6);
   
//    cell1.innerHTML = document.getElementById("firstName").value;
//    cell2.innerHTML = document.getElementById("lastName").value;
//    cell3.innerHTML = document.querySelector('input[name="gender"]:checked').value;
   
//    var foodArray = [];
//    var checkboxes = document.querySelectorAll('input[name="food"]:checked');
//    for (var i = 0; i < checkboxes.length; i++) {
//      foodArray.push(checkboxes[i].value);
//    }
//    cell4.innerHTML = foodArray.join(", ");
   
//    cell5.innerHTML = document.getElementById("address").value;
//    cell6.innerHTML = document.getElementById("state").value;
//    cell7.innerHTML = document.getElementById("country").value;
   
//    document.getElementById("firstName").value = "";
//    document.getElementById("lastName").value = "";
//    document.getElementById("gender").checked = false;
//    checkboxes.forEach(function(checkbox) {
//      checkbox.checked = false;
//    });
//    document.getElementById("address").value = "";
//    document.getElementById("state").value = "default";
//    document.getElementById("country").value = "India";
//  }


// let list1 = [];
// let list2 = [];
// let list3 = [];
// let list4 = [];
// let list5 = [];
// let list6 = [];
// let list7 = [];
// let list8 = [];

// let n = 1;
// let x = 0;

//  function AddRow() {
//   let AddRown = document.getElementById('food-table');
//   let NewRow = AddRown.insertRow(n);

//   list1[x] = document.getElementById('fname').value;
//   list2[x] = document.getElementById('lname').value;
//   list3[x] = document.getElementsByClassName('Gender').value;
//   list5[x] = document.getElementById('state').value;
//   list6[x] = document.getElementById('address').value;
//    // list4[x] = document.getElementById('food-select');

   //  let form = list4[x]
//   form = document.getElementById("food-form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const selectedFoods = Array.from(form.elements["food"]).filter(option => option.selected).map(option => option.value);
//   addRowToTable(selectedFoods);
// });

// function addRowToTable(selectedFoods) {
//   const table = document.getElementById("food-table");
//   const row = table.insertRow(-1);
//   const cell = row.insertCell(0);
//   cell.innerHTML = selectedFoods.join(", ");
// }

//   let cel1 = NewRow.insertCell(0);
//   let cel2 = NewRow.insertCell(1);
//   let cel3 = NewRow.insertCell(2);
//   let cel4 = NewRow.insertCell(3);
//   let cel5 = NewRow.insertCell(4);
//   let cel6 = NewRow.insertCell(5);

//   cel1.innerHTML = list1[x];
//   cel2.innerHTML = list2[x];
//   cel3.innerHTML = list3[x];
//   cel4.innerHTML = list7[x];
//   cel5.innerHTML = list4[x];
//   cel6.innerHTML = list5[x];

//   n++;
//   x++;
// }


// let list1 = [];
// let list2 = [];
// let list3 = [];
// let list4 = [];
// let list5 = [];
// let list6 = [];
// let list7 = [];
// let list8 = [];

// let n = 1;
// let x = 0;

//   function AddRow () {

// const form = document.getElementById('my-form');
// const AddRown = document.getElementById("my-table");
// const NewRow = AddRown.insertRow(n);

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   // Get form values
//    list1[x] = form.elements["firstName"].value;
//    list2[x] = form.elements["lastName"].value;
//    list3[x] = form.elements["gender"].value;
//    list4[x] = Array.from(form.elements["food"]).filter(option => option.selected).map(option => option.value);
//    list5[x] = form.elements["state"].value;
//    list6[x] = form.elements["address"].value;
//    list7[x] = form.elements["pincode"].value;
  
//   // Create new table row with form data
//   const cel1 = NewRow.insertRow(0);
//   const cel2 = NewRow.insertCell(1);
//   const cel3 = NewRow.insertCell(2);
//   const cel4 = NewRow.insertCell(3);
//   const cel5 = NewRow.insertCell(4);
//   const cel6 = NewRow.insertCell(5);
//   const cel7 = NewRow.insertCell(6);
//   const cel8 = NewRow.insertCell(7);
  
//   cel1.innerHTML =list1[x];
//   cel2.innerHTML =list2[x];
//   cel3.innerHTML =list3[x];
//   cel4.innerHTML =list4[x];
//   cel5.innerHTML =list5[x];
//   cel6.innerHTML =list6[x];
//   cel7.innerHTML =list7[x];
//   cel8,innerHTML =list8[x];
//   // Reset form
//   n++;
//   x++;
//   form.reset();
// });
  
// }

let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];
let list6 = [];
let list7 = [];

let n = 1;
let x = 0;

function AddRow() {

  
const form = document.getElementById('my-form');
const AddRown = document.getElementById("my-table");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
  
  // Get form values
  list1[x] = form.elements["firstName"].value;
  list2[x] = form.elements["lastName"].value;
  list3[x] = form.elements["gender"].value;
  list4[x] = Array.from(form.elements["food"]).filter(option => option.selected).map(option => option.value);
  list5[x] = form.elements["state"].value;
  list6[x] = form.elements["address"].value;
  list7[x] = form.elements["pincode"].value;
  
  // Create new table row with form data
  const NewRow = AddRown.insertRow(n);
  const cel1 = NewRow.insertCell(0);
  const cel2 = NewRow.insertCell(1);
  const cel3 = NewRow.insertCell(2);
  const cel4 = NewRow.insertCell(3);
  const cel5 = NewRow.insertCell(4);
  const cel6 = NewRow.insertCell(5);
  const cel7 = NewRow.insertCell(6);
  
  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  
  // Reset form
  n++;
  x++;
  form.reset();
}
// });


// }