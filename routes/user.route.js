const { Router } = require("express");

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = Router();

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:userId", getUser);
router.delete("/user/:userId", deleteUser);

module.exports = router;
