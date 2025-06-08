const mongoose = require("mongoose");

const OffreSchema = new mongoose.Schema({
  description: { type: String, required: true },
  remise: { type: String, required: true },
  dateDebutOffre: { type: Date, required: true },
  dateFinOffre: { type: Date, required: true },
  avantages: [{ type: String, required: true }],
});

const Offre = mongoose.model("Offre", OffreSchema);
module.exports = Offre;
