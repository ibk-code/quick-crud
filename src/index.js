const data = require("../utils/data");

let users = data.User;

const findUser = (id) => {
  return (x) => x._id === id;
};

//Create Operation
//create new user
const addUser = (user) => {
  if (Array.isArray(users) && !Array.isArray(user)) {
    const id = "" + (+users[users.length - 1]._id + 1);
    const newObj = { id, ...user };
    users.push(newObj);
    console.log(users);
  } else {
    console.log("You have a bad type");
  }
};
// addUser()

// Read Operation
//Reading user data
// get all users
const getAllUser = () => {
  console.log(users);
  return users;
};
// getAllUser();

// get user by id
const getUserById = (id) => {
  const userId = findUser(id);
  console.log(users[users.findIndex(userId)]);
  return users.findIndex(userId);
};
// getUserById("2");

// update Operation
// Update user details
// getuser by id and updata
const updateUser = (id, update) => {
  const userId = findUser(id);
  const userIndex = users.findIndex(userId);
  const oldObj = users[userIndex];
  users[userIndex] = { ...oldObj, ...update };
  console.log(users);
  return users;
};
// updateUser("2", { name: "ibk" });

// Delete Operation
// delete user by id
const removeUser = (id) => {
  const userId = findUser(id);
  const userIndex = users.findIndex(userId);
  users.splice(userIndex, 1);
  console.log(users);
  return users;
};
// removeUser("2");

// remove moreThanOneUser
const removeMany = (obj) => {
  const keys = Object.keys(obj);
  console.log(
    users.filter((e) => {
      return e[`${keys[0]}`] !== obj[`${keys[0]}`];
    })
  );
  return users.filter((e) => {
    return e[`${keys[0]}`] !== obj[`${keys[0]}`];
  });
};
// removeMany({ email: "kc@portalhub.com" });
