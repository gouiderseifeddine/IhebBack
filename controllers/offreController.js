const Offre = require("../models/offre");

exports.createOffre = async (req, res) => {
  try {
    const offre = new Offre(req.body);
    await offre.save();
    res.status(201).json(offre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOffres = async (req, res) => {
  try {
    const offres = await Offre.find();
    res.status(200).json(offres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOffreById = async (req, res) => {
  try {
    const offre = await Offre.findById(req.params.id);
    if (!offre) return res.status(404).json({ message: "Offre not found" });
    res.status(200).json(offre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOffre = async (req, res) => {
  try {
    const offre = await Offre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!offre) return res.status(404).json({ message: "Offre not found" });
    res.status(200).json(offre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOffre = async (req, res) => {
  try {
    const offre = await Offre.findByIdAndDelete(req.params.id);
    if (!offre) return res.status(404).json({ message: "Offre not found" });
    res.status(200).json({ message: "Offre deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
