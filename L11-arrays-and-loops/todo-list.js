/*
Steps (Algorithm)
1. Create array to store todos (empty)
2. When we click "Add",
3. Get text from textbox
4. Add it to array
5. console.log() the array
*/
const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-todo-input");
  const todo = inputElement.value;

  todoList.push(todo);
  console.log(todoList);

  inputElement.value = '';
}
