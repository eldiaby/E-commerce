import * as models from "../module.js";
import * as signupView from "../views/signupView.js";
import * as helpers from "../helpers.js";

const controllAddUser = function () {
  const user = signupView.getUser();
  models.addUser(user);
  helpers.goToHomePage();
};

const init = function () {
  signupView.handleSignup(controllAddUser);
};

init();
