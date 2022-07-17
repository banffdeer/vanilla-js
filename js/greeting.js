const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function userInputName(event) {
	event.preventDefault();

	loginForm.classList.add(HIDDEN_CLASSNAME);
	
	const username = loginForm.querySelector("input").value;

	localStorage.setItem(USERNAME_KEY, username);

	showResult();
}

function showResult() {
	const savedUsername = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Love Yourself, ${savedUsername}.`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(USERNAME_KEY) === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", userInputName)
}
else {
	showResult();
}