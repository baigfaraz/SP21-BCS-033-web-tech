const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const session = require("express-session");
const sessionMiddleware = require("./middlewares/sessionMiddleware");
const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
  });

app.use("/", require("./routes/userRoute"));

app.listen(port, () => console.log(`Server started at Port ${port}.`));
module.exports = app;
