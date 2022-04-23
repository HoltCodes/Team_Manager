const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    
    name: {
      type: String,
      required: [true, "Player name is required"],
      minLength: [2, "Player Name must be at least 2 characters"],
    },
    preferredPosition: {
      type: String,
    },
    gameOneStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameTwoStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameThreeStatus: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    }


  }, { timestamps: true })

module.exports = mongoose.model("Player", PlayerSchema);
