const Bateau = require("../models/bateau");

exports.createBateau = async (req, res) => {
  try {
    const bateau = new Bateau(req.body);
    await bateau.save();
    res.status(201).json(bateau);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBateaux = async (req, res) => {
  try {
    const bateaux = await Bateau.find();
    res.status(200).json(bateaux);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBateauById = async (req, res) => {
  try {
    const bateau = await Bateau.findById(req.params.id);
    if (!bateau) return res.status(404).json({ message: "Bateau not found" });
    res.status(200).json(bateau);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBateau = async (req, res) => {
  try {
    const bateau = await Bateau.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bateau) return res.status(404).json({ message: "Bateau not found" });
    res.status(200).json(bateau);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBateau = async (req, res) => {
  try {
    const bateau = await Bateau.findByIdAndDelete(req.params.id);
    if (!bateau) return res.status(404).json({ message: "Bateau not found" });
    res.status(200).json({ message: "Bateau deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
