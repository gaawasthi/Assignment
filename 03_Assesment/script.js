//     Implement a small webpage that:
// - Has an input field and a button “Add Task”.
// - When the user enters a string and clicks the button → the string should be added to a list below.
// - Use `querySelector`, `addEventListener`, and `createElement`.
// - Use `map` or `forEach` to render the list after each addition.

const btn = document.querySelector("#btn");
const inPut = document.getElementById("inPut");

let tasks = [];

btn.addEventListener("click", () => {
  const task = inPut.value;
  tasks.push(task);
  renderData(tasks)
});

function renderData(tasks) {
    let main = document.getElementById("renderDiv");
    main.innerHTML = "";
    tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerText = task;
    main.append(li);
  });
}
