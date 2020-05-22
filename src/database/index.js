const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
