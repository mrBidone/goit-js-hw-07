const usernameElement = document.querySelector("#name-input");
const greet = document.querySelector("#name-output");

usernameElement.addEventListener('input', event => {
    const username = event.currentTarget.value.trim();
    greet.textContent = username.length != 0 ? username : "Anonymous";
});











