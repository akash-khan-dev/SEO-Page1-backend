const express = require("express");

const app = express();
const cors = require("cors");
const dbConnection = require("./Db/db");
const { cloudinary } = require("./utils/cloudinary");
const UploadFile = require("./modal/UploadFileModal");

// middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());
app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    const UploadData = await new UploadFile({
      file: uploadedResponse.url,
    });
    UploadData.save();
    res.json({ msg: "uploaded successful" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.get("/api/upload", async (req, res) => {
  try {
    const data = await UploadFile.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ err: "Something went wrong" });
  }
});
// database connection
dbConnection;
// router

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
