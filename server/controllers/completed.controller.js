const Completed = require("../models/completed.model");

const getComs = async (req, res) => {
  try {
    const coms = await Completed.find({});
    res.status(200).json(coms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCom = async (req, res) => {
  try {
    const { id } = req.params;
    const com = await Completed.findById(id);
    if (!com) {
      return res.status(404).json({ message: "Completed not found" });
    }
    res.status(200).json(com);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCom = async (req, res) => {
  try {
    const com = await Completed.create(req.body);
    res.status(200).json(com); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCom = async (req, res) => {
  try {
    const { id } = req.params;
    const com = await Completed.findByIdAndUpdate(id, req.body);

    if (!com) {
      return res.status(404).json({ message: "Completed not found" });
    }
    const updateCom = await Completed.findById(id);
    res.status(200).json(updateCom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCom = async (req, res) => {
  try {
    const { id } = req.params;
    const com = await Completed.findByIdAndDelete(id);

    if (!com) {
      return res.status(404).json({ message: "Completed not found" });
    }

    res.status(200).json({ message: "Completed deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComs,
  getCom,
  createCom,
  updateCom,
  deleteCom,
};
