document.getElementById("addbtn").addEventListener("click", () => {
  var input = document.getElementById("input1").value.trim();
  if (input === "") return;
  let data = document.createElement("p");
  data.style.display = "flex";
  data.style.alignItems = "center";
  data.style.justifyContent = "space-between";
  data.style.gap = "10px";
  data.style.margin = "10px 0";
  // Task text
  let task = document.createElement("span");
  task.innerText = input;
  task.style.flex = "1";
  data.appendChild(task);
  // Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "btn btn-primary btn-sm";
  data.appendChild(editBtn);
  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";
  data.appendChild(deleteBtn);
  // Button event
editBtn.addEventListener("click", () => {
  let updatedText = prompt("Edit your to-do:", task.innerText);
  console.log("Before:", task.innerText);
  console.log("After prompt:", updatedText);
  if (updatedText !== null && updatedText.trim() !== "") {
    task.innerText = updatedText;
    // console.log(task.innerText); 
  }
});
// Delete event
  deleteBtn.addEventListener("click", () => {
    data.remove();
});
  document.getElementById("data").appendChild(data);
});
