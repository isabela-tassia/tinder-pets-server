const mongoose = require("mongoose");
const serverDb = "tinderpets";
async function db(){
  try {
    const db = await mongoose.connect(
      `mongodb://localhost:27017/${serverDb}`,
      {
        useCreateIndex: true,
        useNewUrlParsers: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );
    console.log("conected to db", db.connections[0].name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = db