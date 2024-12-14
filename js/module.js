export const users = [];

export const state = {
  activeUser: {},
};

export const getUsers = async function () {
  const res = await fetch("https://fakestoreapi.com/users");
  const data = await res.json();
  users.push(...data);
  console.log(`? Wrond password`, users.splice(3, 1));
};

export const addUser = function (user) {
  users.push(user);
};

export const userLogin = function (user) {
  const userSerch = users.find(
    (el) => el.email === user.email && el.password === user.password
  );
  state.activeUser = JSON.parse(JSON.stringify(userSerch));
};

const init = async function () {
  await getUsers();
  console.log(users);
};

init();
