const Agent = require("../models/agent");
const bcrypt = require("bcryptjs");

exports.createAgent = async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAgentById = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) return res.status(404).json({ message: "Agent not found" });
    res.status(200).json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAgent = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!agent) return res.status(404).json({ message: "Agent not found" });
    res.status(200).json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAgent = async (req, res) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);
    if (!agent) return res.status(404).json({ message: "Agent not found" });
    res.status(200).json({ message: "Agent deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginAgent = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find client by email
    const agent = await Agent.findOne({ email });

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    // Check if user has Client role
    if (agent.role !== "Agent") {
      return res.status(403).json({ message: "User is not a Agent" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return client
    res.status(200).json({
      message: "Login successful",
      agent: agent,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
