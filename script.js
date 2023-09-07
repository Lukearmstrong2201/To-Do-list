const input = document.getElementById("input");
const list = document.getElementById("list");

list.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("complete");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } 
 }, false);

function addTask() {
    if (input.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value,
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';  
};