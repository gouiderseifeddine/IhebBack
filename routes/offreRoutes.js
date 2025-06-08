const express = require("express");
const offreRouter = express.Router();
const offreController = require("../controllers/offreController");

offreRouter.post("/", offreController.createOffre);
offreRouter.get("/", offreController.getOffres);
offreRouter.get("/:id", offreController.getOffreById);
offreRouter.put("/:id", offreController.updateOffre);
offreRouter.delete("/:id", offreController.deleteOffre);

module.exports = offreRouter;
