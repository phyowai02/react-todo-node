const express = require("express");
const router = express.Router();
const { getComs, getCom, createCom, updateCom, deleteCom} = require("../controllers/completed.controller");

router.get('/', getComs);
router.get('/:id', getCom);

router.post("/", createCom);

// update a inprogress
router.put("/:id", updateCom);

// delete a inprogress
router.delete("/:id", deleteCom);

module.exports = router;