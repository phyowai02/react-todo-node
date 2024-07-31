const express = require("express");
const router = express.Router();
const { getPros, getPro, createPro, updatePro, deletePro} = require("../controllers/inprogress.controller");

router.get('/', getPros);
router.get('/:id', getPro);

router.post("/", createPro);

// update a inprogress
router.put("/:id", updatePro);

// delete a inprogress
router.delete("/:id", deletePro);

module.exports = router;