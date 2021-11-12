import "../scss/main.scss";

const todoURI = 'todolist_data.json';
let todotest;

fetch(todoURI, {
    method: 'GET'
}).then(response => {
    return response.json()
}).then(data => {
    todotest = data;
    load(data);
})

const createTask = (task, parent, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.setAttribute("id", index);
    parent.appendChild(li);
    let completeBtn = document.createElement("BUTTON");
    completeBtn.setAttribute("name", "complete");
    completeBtn.setAttribute("value", "complete");
    completeBtn.className = "complete";
    completeBtn.innerHTML = "Complete";

    li.appendChild(completeBtn);

    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.setAttribute("name", "Delete");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.className = "close";
    deleteBtn.innerHTML = "Delete";

    li.appendChild(deleteBtn);

    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let complete = document.getElementsByClassName("complete");
    let j;
    for (j = 0; j < complete.length; j++) {
        complete[j].onclick = function() {
            let tempParent = this.parentElement;
            if (tempParent.className === "") {

                tempParent.setAttribute("class", "completed");
            } else {
                tempParent.className = "";
                complete[j].setAttribute("class", "complete");

            }
        }
    }


    let modalDescription = document.getElementById("modalDescription");
    li.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            let myNode = ev.target;
            let currentNode = todotest[myNode.getAttribute("id")];

            let string = "";
            for (const property in currentNode) {
                string += `<div> ${property}: ${currentNode[property]} </div>`;
            }

            modalPrimary.style.display = "none";
            modal.style.display = "block";
            modalDescription.style.display = "block";
            modalDescription.innerHTML = string;
        }
    }, false);
};


var superToggle = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
}

const load = (data) => {
    const ol = document.getElementById('list');
    data.forEach((item, i) => {
        const task = `${item.Title}`;
        createTask(task, ol, i);
    });
}

let modalPrimary = document.getElementById("task-attributes");
let modalDescription = document.getElementById("modalDescription");

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let addbtn = document.getElementById("addBtn");

addbtn.onclick = function() {
    modal.style.display = "block";
    modalPrimary.style.display = "block";
    modalDescription.style.display = "none";
}

saveBtn.onclick = function() {
    newElement();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function newElement() {
    let li = document.createElement("li");
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDescription = document.getElementById("taskDescription").value;
    let taskDate = document.getElementById("taskDate").value;
    let taskTime = document.getElementById("taskTime").value;

    let taskObject = {
        "Title": taskTitle,
        "Description": taskDescription,
        "Date": taskDate,
        "Time": taskTime

    };
    todotest.push(taskObject);

    let t = document.createTextNode(taskTitle);
    li.appendChild(t);
    li.setAttribute("id", todotest.length - 1);
    if (taskTitle === '') {
        alert("Task Title cannot be empty!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";

    let completeBtn = document.createElement("BUTTON");
    completeBtn.setAttribute("name", "complete");
    completeBtn.setAttribute("value", "completed");
    completeBtn.className = "complete";
    completeBtn.innerHTML = "Complete";

    li.appendChild(completeBtn);

    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.setAttribute("name", "Delete");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.className = "close";
    deleteBtn.innerHTML = "Delete";

    li.appendChild(deleteBtn);

    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    li.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            let myNode = ev.target;
            let currentNode = todotest[myNode.getAttribute("id")];
            let string = "";
            for (const property in currentNode) {
                console.log(`${property}: ${currentNode[property]}`);
                string += `<div> ${property}: ${currentNode[property]} </div>`;
            }
            modalPrimary.style.display = "none";
            modal.style.display = "block";
            modalDescription.style.display = "block";
            modalDescription.innerHTML = string;

        }
    }, false);

    modal.style.display = "none";
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
//let complete = document.getElementsByClassName("complete");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}