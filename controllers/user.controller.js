const db = require("../data/data");

const createUser = (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: db.userIdCounter++,
    name,
    email,
    password,
  };
  db.users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.status(200).json(db.users);
};

const getUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const user = db.users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User is not found" });
  }
  res.status(200).json(user);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const userIndex = db.users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User is not found" });
  }
  db.users.splice(userIndex, 1);
  res.status(204).send();
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
};
