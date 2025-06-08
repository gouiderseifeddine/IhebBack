const mongoose = require("mongoose");
const User = require("./user");

const ClientSchema = new mongoose.Schema({
  bateaux: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bateau" }],
  simulation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Simulation" }],
  contrat: { type: mongoose.Schema.Types.ObjectId, ref: "Contrat" },
});

// Inherit from User
const Client = User.discriminator("Client", ClientSchema);
module.exports = Client;
