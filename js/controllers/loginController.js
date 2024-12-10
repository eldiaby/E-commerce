import * as loginView from "./../views/loginView.js";
import * as module from "../module.js";
import { goToHomePage } from "../helpers.js";

const contralLogin = function (user) {
  module.userLogin(user);
  console.log(module.state.activeUser);
  goToHomePage();
};

const init = async function () {
  await module.getUsers();
  console.log(module.users);
  loginView.handleLogin(contralLogin);
};

init();
