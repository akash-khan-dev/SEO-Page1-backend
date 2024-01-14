const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const attachmentsSchema = new Schema({
  file: {
    type: String,
    required: true,
  },
});

module.exports = model("UploadFile", attachmentsSchema);
