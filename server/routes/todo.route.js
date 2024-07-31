const express = require("express");
const router = express.Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");

router.get('/', getTodos);
router.get("/:id", getTodo);

router.post("/", createTodo);

// update a todo
router.put("/:id", updateTodo);

// delete a todo
router.delete("/:id", deleteTodo);


module.exports = router;