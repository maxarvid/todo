let todos;
todos = JSON.parse(localStorage.getItem("todos")) || [];

const createTodo = (task) => {
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
};

let btn = document.querySelector("button");
btn.onclick = () => {
  let input = document.getElementById("new-task").value;
  console.log(todos);
  createTodo(input);
  alert(`I have been clicked, input is: ${input}`);
  renderTodo();
};

const renderTodo = () => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "todos");

  for (let i=0; i < todos.length; i++) {
    let li = document.createElement("li")
    li.setAttribute("key", i)
    li.innerHTML += todos[i]
    ul.appendChild(li)
  }

  document.getElementById("todo-list").appendChild(ul);


};
