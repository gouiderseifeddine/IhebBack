const express = require("express");
const contratRouter = express.Router();
const contratController = require("../controllers/contratController");

contratRouter.post("/", contratController.createContrat);
contratRouter.get("/", contratController.getContrats);
contratRouter.get("/:id", contratController.getContratById);
contratRouter.put("/:id", contratController.updateContrat);
contratRouter.delete("/:id", contratController.deleteContrat);

module.exports = contratRouter;
