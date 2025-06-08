const mongoose = require("mongoose");

const BateauSchema = new mongoose.Schema({
  type_bateau: { type: String, required: true },
  type_de_coque: { type: String, required: true },
  type_de_moteur: { type: String, required: true },
  Accessoires: { type: String, required: true },
  age_bateau: { type: Number, required: true },
  prix_bateau: { type: Number, required: true },
  date_acquisition: { type: Date, required: true },
  status_bateau: { type: String, required: true },
});

const Bateau = mongoose.model("Bateau", BateauSchema);
module.exports = Bateau;
