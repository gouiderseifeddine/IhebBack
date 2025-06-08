const mongoose = require("mongoose");
const User = require("./user");

const AdminSchema = new mongoose.Schema({
  nb_utilisateur_gere: { type: Number, default: 0 },
});

const Admin = User.discriminator("Admin", AdminSchema);
module.exports = Admin;
