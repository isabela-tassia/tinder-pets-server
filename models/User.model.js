const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  passwordHash: { type: String, required: true },
  phone: { type: String, required: true, trim: true },
  address: {
    city: { type: String, trim: true },
    stateOrProvince: { type: String, trim: true },
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    required: true,
    default: "USER",
  },
  birthDate: { type: String, required: true, trim: true },
});
module.exports = mongoose.model("User", UserSchema);