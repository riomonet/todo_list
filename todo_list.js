const form = document.querySelector('#main-form');
const list = document.querySelector('#todo-list');
const input = document.querySelector('#todo-item');

updatePage();  //update page from local storage

form.addEventListener('submit',function(e){
    e.preventDefault();

    const newTodo = document.createElement('li');
    const newButton = document.createElement('button');
    newButton.innerText = 'delete';
    newTodo.innerText = input.value + ' ';
    input.value = '';
    newTodo.appendChild(newButton);
    list.appendChild(newTodo);
    updateLocalStorage();

});

list.addEventListener('click', function(event){

    if (event.target.tagName === 'BUTTON')
	event.target.parentElement.remove();
    
    if (event.target.tagName === 'LI')

	event.target.style.textDecoration  = "line-through";

    updateLocalStorage();

});

function updateLocalStorage() {
    localStorage.setItem('ol', JSON.stringify(list.innerHTML));
}

function updatePage() {
    list.innerHTML = JSON.parse(localStorage.getItem('ol'));
}

