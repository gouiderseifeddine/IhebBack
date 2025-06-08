const mongoose = require("mongoose");

const SimulationSchema = new mongoose.Schema({
  type_Bateau: { type: String, required: true },
  type_Coque: { type: String, required: true },
  type_Moteur: { type: String, required: true },
  type_Contrat: { type: String, required: true },
  montant_Assurance: { type: Number, required: true },
  typeClient: {
    type: String,
    enum: ["Particulier", "Entreprise", "Touriste"],
    required: true,
  },
});

const Simulation = mongoose.model("Simulation", SimulationSchema);
module.exports = Simulation;
