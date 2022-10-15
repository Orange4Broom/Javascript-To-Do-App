//------Create const for button and nameInput from user------
const addButton = document.getElementById('addButton');
const taskName = document.getElementById('nameInput');

addButton.onclick = function() {

    //------Check if your tsak have some name------

    if (taskName.value.length < 1) {
        alert('Give your task some name')
    }
    else {

    //------Create task div with task name and delete button------

    document.getElementById('container').innerHTML += `
    <di class="box">
        <h2 id="header">${taskName.value}</h2>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    `;

    //------Delete created task div------

    const currentTask = document.querySelectorAll('.delete');
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function() {
            this.parentElement.remove();
        }
    }
    }

};