const Simulation = require("../models/simulation");

// ✅ Create a new simulation
exports.createSimulation = async (req, res) => {
  try {
    const simulation = new Simulation(req.body);
    await simulation.save();
    res.status(201).json(simulation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all simulations
exports.getSimulations = async (req, res) => {
  try {
    const simulations = await Simulation.find();
    res.status(200).json(simulations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get a simulation by ID
exports.getSimulationById = async (req, res) => {
  try {
    const simulation = await Simulation.findById(req.params.id);
    if (!simulation)
      return res.status(404).json({ message: "Simulation not found" });
    res.status(200).json(simulation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update a simulation
exports.updateSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!simulation)
      return res.status(404).json({ message: "Simulation not found" });
    res.status(200).json(simulation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete a simulation
exports.deleteSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findByIdAndDelete(req.params.id);
    if (!simulation)
      return res.status(404).json({ message: "Simulation not found" });
    res.status(200).json({ message: "Simulation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
