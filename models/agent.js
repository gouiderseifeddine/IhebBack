const mongoose = require("mongoose");
const User = require("./user");

const AgentSchema = new mongoose.Schema({
  contrats_traite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contrat" }],
  offres_publie: [{ type: mongoose.Schema.Types.ObjectId, ref: "Offre" }],
});

const Agent = User.discriminator("Agent", AgentSchema);
module.exports = Agent;
