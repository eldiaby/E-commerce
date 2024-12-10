// Variables

const form = document.querySelector(".form-login");
const emailInput = document.querySelector("#useremail");
const passwordInput = document.querySelector("#userpassword");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/]{6,32}$/;

let emailValidity = false;
let passwordValidity = false;
const user = {};

// ///////////////////////////////////////////////////////////
// Functions

const showErrorMessage = (element, message) => {
  element.nextElementSibling.textContent = `${message}.`;
  element.parentElement.classList.remove("success");
  element.parentElement.classList.add("error");
};
const hideErrorMessage = (element) => {
  //   element.nextElementSibling.textContent = "";
  element.parentElement.classList.remove("error");
  element.parentElement.classList.add("success");
};

// Start of email validity check
const checkEmailValidity = (email) => {
  const emailValue = email.value.trim();

  if (emailValue.length === 0) {
    showErrorMessage(email, "Email cannot be empty");
  } else if (!emailRegex.test(emailValue)) {
    showErrorMessage(email, "Email is not valid");
  } else {
    hideErrorMessage(email);
    emailValidity = true;
    user.email = emailValue;
  }
};

// Start of password validity check
const checkPasswordValidity = (password) => {
  const passwordValue = password.value.trim();

  if (passwordValue.length === 0) {
    showErrorMessage(password, "Password cannot be empty");
  } else if (!passwordRegex.test(passwordValue)) {
    showErrorMessage(password, "Password must be at least 8 characters long");
  } else {
    hideErrorMessage(password);
    passwordValidity = true;
    user.password = passwordValue;
  }
};

export const handleLogin = function (handler) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailValidity && passwordValidity) handler(user);
  });
};

// ///////////////////////////////////////////////////////////
// Event listiners
emailInput.addEventListener("input", (e) => checkEmailValidity(e.target));

passwordInput.addEventListener("input", (e) => checkPasswordValidity(e.target));
