const mongoose = require("mongoose");

const ContratSchema = new mongoose.Schema({
  type_Contrat: { type: String, required: true },
  debut_contrat: { type: Date, required: true },
  fin_contrat: { type: Date, required: true },
  status: { type: String, required: true },
  prix_Contrat: { type: Number, required: true },
  echeance: { type: Number, required: true },
  client_concerned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
});

const Contrat = mongoose.model("Contrat", ContratSchema);
module.exports = Contrat;
