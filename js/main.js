let login = document.getElementById("login");
let users = JSON.parse(localStorage.getItem("user")) || [];
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

login.addEventListener("click", function () {
  if (users.length === 0) {
    console.log("No users found. Please register first.");
    return;
  }
  checkUsers();
});

function checkUsers() {
  let user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (!user.email || !user.password) {
    let both = document.querySelector(".both");
    both.classList.remove("d-none");
    return;
  } else {
    let both = document.querySelector(".both");
    both.classList.add("d-none");
  }

  let isUserFound = false;

  for (let i = 0; i < users.length; i++) {
    if (user.email === users[i].email && user.password === users[i].password) {
      setTimeout(function () {
        window.location = "./crud.html";
      }, 400);
      isUserFound = true;
    }
  }

  if (!isUserFound) {
    let invalid = document.querySelector(".invalid");
    invalid.classList.remove("d-none");
  } else {
    invalid.classList.add("d-none");
  }
}
