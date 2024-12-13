let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let signupBtn = document.getElementById("signup");
let success = document.querySelector(".alert-success");
let danger = document.querySelector(".text-danger");

let users = JSON.parse(localStorage.getItem("user")) || [];

function createUser() {
  if (!nameInput.value || !emailInput.value || !passwordInput.value) {
    danger.classList.remove("d-none");
    return;
  } else {
    danger.classList.add("d-none");
  }
  if (validationName() && validationEmail() && validationPassword()) {
    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    users.push(user);

    localStorage.setItem("user", JSON.stringify(users));
    success.classList.remove("d-none");

    setTimeout(function () {
      window.location = "./index.html";
    }, 1000);

    console.log(users);
  }
}

signupBtn.addEventListener("click", function () {
  createUser();
});
function validationName() {
  let regex = /^[a-z]{3,15}$/;
  let text = nameInput.value;
  let msgName = document.getElementById("msgName");
  if (regex.test(text)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}
function validationEmail() {
  let regex = /^[a-zA-Z0-9@]{4,17}$/;
  let text = emailInput.value;
  let msgEmail = document.getElementById("msgEmail");
  if (regex.test(text)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    msgEmail.classList.add("d-none");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    msgEmail.classList.remove("d-none");
    return false;
  }
}
function validationPassword() {
  let regex = /^[a-z0-9]{5,15}$/;
  let text = passwordInput.value;
  let msgPassword = document.getElementById("msgPassword");
  if (regex.test(text)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    msgPassword.classList.add("d-none");
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    msgPassword.classList.remove("d-none");
    return false;
  }
}
nameInput.addEventListener("input", function () {
  validationName();
});
emailInput.addEventListener("input", function () {
  validationEmail();
});
passwordInput.addEventListener("input", function () {
  validationPassword();
});
