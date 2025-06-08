const express = require("express");
const bateauRouter = express.Router();
const bateauController = require("../controllers/bateauController");

bateauRouter.post("/", bateauController.createBateau);
bateauRouter.get("/", bateauController.getBateaux);
bateauRouter.get("/:id", bateauController.getBateauById);
bateauRouter.put("/:id", bateauController.updateBateau);
bateauRouter.delete("/:id", bateauController.deleteBateau);

module.exports = bateauRouter;
