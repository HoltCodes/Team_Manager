const PlayerController = require("../controllers/player.controller")

module.exports = (app) => {
  app.post("api/player", PlayerController.createNewPlayer);
  app.get("api/player", PlayerController.getAllPlayers);
  app.delete("api/player/:id", PlayerController.deletePlayer);
  app.put("api/player/:id", PlayerController.updatePlayer);
};