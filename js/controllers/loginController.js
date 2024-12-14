import * as loginView from "./../views/loginView.js";
import * as module from "../module.js";
import { goToHomePage } from "../helpers.js";

const contralLogin = function (user) {
  module.userLogin(user);
  console.log(module.state.activeUser);
  goToHomePage();
};

const init = function () {
  loginView.handleLogin(contralLogin);
};

init();
