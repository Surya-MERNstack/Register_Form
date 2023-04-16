

//food
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
debugger;
  
const form = document.getElementById('my-form');
const AddRown = document.getElementById("my-table");


  
  // Get form values
  list1[x] = form.elements["firstName"].value;
  list2[x] = form.elements["lastName"].value;
  list3[x] = form.elements["gender"].value;
  list4[x] = form.elements['food'].value;
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
  
  n++;
  x++;
  
  // Reset form
  form.reset();
}

// //select



// let list1 = [];
// let list2 = [];
// let list3 = [];
// let list4 = [];
// let list5 = [];
// let list6 = [];
// let list7 = [];
// function AddRow() {
//   debugger;
  
//   const form = document.getElementById('my-form');
//   const AddRown = document.getElementById("my-table");

//   // Get form values
//   list1[x] = form.elements["firstName"].value;
//   list2[x] = form.elements["lastName"].value;
//   list3[x] = form.elements["gender"].value;

//   const selectedFood = form.elements['food'].value;
//   if (selectedFood.length < 2) {
//     alert("Please select at least two food items");
//     return;
//   }

//   list4[x] = selectedFood;
//   list5[x] = form.elements["state"].value;
//   list6[x] = form.elements["address"].value;
//   list7[x] = form.elements["pincode"].value;
  
//   // Create new table row with form data
//   const NewRow = AddRown.insertRow(n);
//   const cel1 = NewRow.insertCell(0);
//   const cel2 = NewRow.insertCell(1);
//   const cel3 = NewRow.insertCell(2);
//   const cel4 = NewRow.insertCell(3);
//   const cel5 = NewRow.insertCell(4);
//   const cel6 = NewRow.insertCell(5);
//   const cel7 = NewRow.insertCell(6);
  
//   cel1.innerHTML = list1[x];
//   cel2.innerHTML = list2[x];
//   cel3.innerHTML = list3[x];
//   cel4.innerHTML = selectedFood.join(', '); // use join method to convert selectedFood array to string
//   cel5.innerHTML = list5[x];
//   cel6.innerHTML = list6[x];
//   cel7.innerHTML = list7[x];
  
//   n++;
//   x++;
  
//   // Reset form
//   form.reset();
// }
