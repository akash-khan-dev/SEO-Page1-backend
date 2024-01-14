const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/SEOTask")
  .then(async () => {
    console.log("Database connected successful");
  })
  .catch((err) => {
    console.log("database connection error");
  });
