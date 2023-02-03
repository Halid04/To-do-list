let tableContainer = document.getElementById("thirdContainer");
let addBtn = document.getElementById("addTask");
let removeBtn = document.getElementById("removeTask");
let input = document.getElementById("input");

addBtn.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("No task entered")
    }
    else{
        let table = document.createElement("table");
        tableContainer.appendChild(table);

        let task = document.createElement("td")
        task.innerHTML = input.value;
        table.append(task)

        
        let deleteTask = document.createElement("td");
        deleteTask.classList.add("img");
        table.append(deleteTask);

        //The function first checks if the taskToDelete element exists 
        //and if it is a child of the tableContainer element. 
        //If both of these conditions are true, the function removes the taskToDelete element 
        //from the tableContainer element using the removeChild method.
        deleteTask.addEventListener("click", ()=>{
          let taskToDelete = deleteTask.parentNode;
          if (taskToDelete  && tableContainer.contains(taskToDelete)) {
            tableContainer.removeChild(taskToDelete);

          }
        });
        
        input.value= "";
        
    }
    
})

removeBtn.addEventListener("click", ()=>{
    tableContainer.innerHTML = "";
})

