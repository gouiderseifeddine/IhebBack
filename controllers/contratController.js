const Contrat = require("../models/contrat");

exports.createContrat = async (req, res) => {
  try {
    const contrat = new Contrat(req.body);
    await contrat.save();
    res.status(201).json(contrat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContrats = async (req, res) => {
  try {
    const contrats = await Contrat.find();
    res.status(200).json(contrats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContratById = async (req, res) => {
  try {
    const contrat = await Contrat.findById(req.params.id);
    if (!contrat) return res.status(404).json({ message: "Contrat not found" });
    res.status(200).json(contrat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContrat = async (req, res) => {
  try {
    const contrat = await Contrat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!contrat) return res.status(404).json({ message: "Contrat not found" });
    res.status(200).json(contrat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContrat = async (req, res) => {
  try {
    const contrat = await Contrat.findByIdAndDelete(req.params.id);
    if (!contrat) return res.status(404).json({ message: "Contrat not found" });
    res.status(200).json({ message: "Contrat deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
