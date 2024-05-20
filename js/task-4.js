const formELement = document.querySelector(".login-form");

formELement.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        email: formELement.elements.email.value.trim(),
        password: formELement.elements.password.value.trim(),
    };
    return data.email === "" || data.password === "" ?
        alert("All form fields must be filled in") :
        console.log(data),
        formELement.reset();
    
});


