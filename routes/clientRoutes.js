const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/", clientController.createClient);
router.get("/", clientController.getClients);
router.get("/:id", clientController.getClientById);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
router.post("/loginClient", clientController.loginClient);

//assign bateau to client
router.post(
  "/assign-bateau/:clientId/:bateauId",
  clientController.assignBateauToClient
);
router.get("/emails", clientController.getAllClients);

module.exports = router;
