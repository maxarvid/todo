let todos = [];
todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos);

const createTodo = (task) => {
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
};

let btn = document.querySelector("button");
btn.onclick = () => {
  let input = document.getElementById("new-task").value;
  alert(`I have been clicked, input is: ${input}`);
};
