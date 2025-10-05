const { users } = require('../model/userModel');

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function registerUser({ username, password, isFavorecido }) {
  if (findUserByUsername(username)) return null;
  const user = { username, password, isFavorecido: !!isFavorecido };
  users.push(user);
  return user;
}

function authenticateUser(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

function getAllUsers() {
  return users;
}

module.exports = {
  findUserByUsername,
  registerUser,
  authenticateUser,
  getAllUsers,
};