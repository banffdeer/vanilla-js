const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

function saveToDosInLocalStorage() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  
  li.remove();

  // deleting in array(toDos)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  // saving arrary(toDos) in localStorage
  saveToDosInLocalStorage();
}

function printToDos(toDo) {
  const li = document.createElement("li");
  li.id = toDo.id;

  const span = document.createElement("span");
  span.innerText = toDo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function addToDo(event) {
  event.preventDefault();
  
  const newToDo = toDoInput.value; // 새로 추가된 toDo 
  const toDo = { // toDo는 object, 기존에는 string
    text: newToDo,
    id: Date.now(),
  }

  toDoInput.value = "";

  printToDos(toDo);

  // saving in array(toDos)
  toDos.push(toDo); // toDos는 object를 원소로 가진 array

  //saving array(toDos) in localStorage
  saveToDosInLocalStorage();
}

toDoForm.addEventListener("submit", addToDo);

toDos = [];
savedToDos = JSON.parse(localStorage.getItem("toDos"));

if (savedToDos !== null) {
  toDos = savedToDos; // updating toDos

  //savedToDos에 있는 배열의 원소들을 화면에 출력해야 한다.
  toDos.forEach((item) => printToDos(item));
}
else {
  toDos = []; // localStorage에 저장된 것이 없다면 그대로...
}