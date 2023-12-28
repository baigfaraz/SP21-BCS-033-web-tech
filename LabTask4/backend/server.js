const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const multer = require("multer");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).send({ message: "File is Uploaded", status: true });
  } else {
    res.status(500).send({ message: "File is not Uploaded", status: false });
  }
});

app.use("/images", express.static("images"));

app.use("/user", require("./routes/userRoute"));
app.use("/product", require("./routes/productRoute"));
app.use("/cart", require("./routes/cartRoute"));

app.listen(port, () => console.log(`Server started at Port ${port}.`));

module.exports = app;
