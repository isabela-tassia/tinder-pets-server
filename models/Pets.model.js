const mongoose = require("mongoose");
const PetsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  birthdate: { type: Date, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model("Pets", PetsSchema);
