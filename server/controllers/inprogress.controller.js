const inProgress = require("../models/inprogress.model");

const getPros = async (req, res) => {
  try {
    const pros = await inProgress.find({});
    res.status(200).json(pros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPro = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await inProgress.findById(id);
    if (!pro) {
      return res.status(404).json({ message: "inProgress not found" });
    }
    res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPro = async (req, res) => {
  try {
    const pro = await inProgress.create(req.body);
    res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePro = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await inProgress.findByIdAndUpdate(id, req.body);

    if (!pro) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const updatePro = await inProgress.findById(id);
    res.status(200).json(updatePro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePro = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await inProgress.findByIdAndDelete(id);

    if (!pro) {
      return res.status(404).json({ message: "inProgress not found" });
    }

    res.status(200).json({ message: "inProgress deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPros,
  getPro,
  createPro,
  updatePro,
  deletePro,
};
