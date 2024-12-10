// ===================================================================================
// Start of elements and variables
// ===================================================================================
export const form = document.querySelector(".form-signup");
const username = document.querySelector("#username");
const email = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");

let usernameValidity = false;
let emailValidity = false;
let passwordValidity = false;

let user = {};

const nameRegex =
  /^(?!.*\s{2,})[A-Za-z0-9]{3,12}(?: [A-Za-z0-9]{3,12})*(?: )?$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/]{6,32}$/;

// ===================================================================================
// Start of functions
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

// Start of username validity check
const checkUsernameValidity = (username) => {
  const usernameValue = username.value.trim();

  if (usernameValue.length === 0) {
    showErrorMessage(username, "Username cannot be empty");
  } else if (!nameRegex.test(usernameValue)) {
    showErrorMessage(username, "Username must be between 8 and 30 characters");
  } else {
    hideErrorMessage(username);
    usernameValidity = true;
    user.username = usernameValue;
  }
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

export const getUser = function () {
  return user;
};

export const handleSignup = function (handler) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (usernameValidity && emailValidity && passwordValidity) handler();
  });
};

// ===================================================================================
// Start of form event listener
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (usernameValidity && emailValidity && passwordValidity) {
//     getUser(user);
//   }
// });

username.addEventListener("input", (e) => {
  checkUsernameValidity(e.target);
});

email.addEventListener("input", (e) => {
  checkEmailValidity(e.target);
});

password.addEventListener("input", (e) => {
  checkPasswordValidity(e.target);
});

// username.focus();
