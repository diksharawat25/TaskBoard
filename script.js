const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBOX.value === '') {
        alert("You must write something!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `${inputBOX.value} <span>&#10005;</span>`;
    listContainer.appendChild(li);
    inputBOX.value = ""; // Clear the input box
    saveData(); // Save the updated task list to localStorage
}

inputBOX.addEventListener("keyup", function(event) {
    if (event.keyCode=== 13) { // Enter key pressed
        event.preventDefault();
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the list to localStorage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Load saved data, or empty if none
}

showTask(); // Show tasks from localStorage when the page loads