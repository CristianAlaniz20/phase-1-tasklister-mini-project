document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const toDo = e.target.querySelector("#new-task-description").value
    buildToDo(toDo)
    }
  );

});

function buildToDo(x) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = x;
    btn.textContent = "x";
    document.querySelector("#tasks").appendChild(li);
    li.appendChild(btn);

    btn.addEventListener("click", () => li.remove())
}