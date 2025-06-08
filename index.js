const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic Route
app.get("/", (req, res) => {
  res.send("Ship Insurance API is running!");
});

// Routes
const userRoutes = require("./routes/userRoutes");
const clientRoutes = require("./routes/clientRoutes");
const agentRoutes = require("./routes/agentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bateauRoutes = require("./routes/bateauRoutes");
const contratRoutes = require("./routes/contratRoutes");
const simulationRoutes = require("./routes/simulationRoutes");
const offreRoutes = require("./routes/offreRoutes");

app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/bateaux", bateauRoutes);
app.use("/api/contrats", contratRoutes);
app.use("/api/simulations", simulationRoutes);
app.use("/api/offres", offreRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
