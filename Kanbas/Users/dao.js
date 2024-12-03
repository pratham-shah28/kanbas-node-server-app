// import db from "../Database/index.js";

// let { users } = db;
// // export const createUser = (user) => {
// //  const newUser = { ...user, _id: Date.now().toString() };
// //  users = [...users, newUser];
// //  return newUser;
// // };
// export const findAllUsers = () => users;
// export const findUserById = (userId) => users.find((user) => user._id === userId);
// // export const findUserByUsername = (username) => users.find((user) => user.username === username);
// export const findUserByCredentials = (username, password) =>
//   users.find( (user) => user.username === username && user.password === password );
// //export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
// export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));

// export const createUser = (user) => (users = [...users, { ...user, _id: Date.now().toString() }]);
// export const findUserByUsername = (username) => users.find((user) => user.username === username);

// export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));


import model from "./model.js";

export const createUser = (user) => {} // implemented later
const findAllUsers = async (req, res) => {
  const { role } = req.query;
  if (role) {
    const users = await dao.findUsersByRole(role);
    res.json(users);
    return;
  }
  const users = await dao.findAllUsers();
  res.json(users);
};

export const findUserById = (userId) => model.findById(userId);

export const deleteUser = (userId) => model.deleteOne({ _id: userId });




export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });

export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });

