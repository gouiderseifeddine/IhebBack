const Client = require("../models/client");
const Bateau = require("../models/bateau");
const bcrypt = require("bcryptjs");

exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });

    // If simulation field is present in body → add to array
    if (req.body.simulation) {
      if (!client.simulation.includes(req.body.simulation)) {
        client.simulation.push(req.body.simulation);
      }
    }

    // Otherwise, update other fields if any (you can add more handling here)
    Object.keys(req.body).forEach((key) => {
      if (key !== "simulation") {
        client[key] = req.body[key];
      }
    });

    await client.save();

    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.loginClient = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find client by email
    const client = await Client.findOne({ email });

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    // Check if user has Client role
    if (client.role !== "Client") {
      return res.status(403).json({ message: "User is not a client" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return client
    res.status(200).json({
      message: "Login successful",
      client,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find({}, "_id email"); // Only return _id and email
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//assign bateau to client :
exports.assignBateauToClient = async (req, res) => {
  const { clientId, bateauId } = req.params;

  try {
    // Check if client exists
    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    // Check if bateau exists
    const bateau = await Bateau.findById(bateauId);
    if (!bateau) return res.status(404).json({ message: "Bateau not found" });

    // Add bateau to client's list if not already there
    if (!client.bateaux.includes(bateauId)) {
      client.bateaux.push(bateauId);
      await client.save();
    }

    res
      .status(200)
      .json({ message: "Bateau assigned to client successfully", client });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
