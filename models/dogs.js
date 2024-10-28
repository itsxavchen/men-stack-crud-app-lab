const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  sex: String,
  isDewormed: Boolean,
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;