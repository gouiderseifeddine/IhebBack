const express = require("express");
const simulationRouter = express.Router();
const simulationController = require("../controllers/simulationController");

simulationRouter.post("/", simulationController.createSimulation);
simulationRouter.get("/", simulationController.getSimulations);
simulationRouter.get("/:id", simulationController.getSimulationById);
simulationRouter.put("/:id", simulationController.updateSimulation);
simulationRouter.delete("/:id", simulationController.deleteSimulation);

module.exports = simulationRouter;
