const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");

const contactBookRoutes = require("./routes/contact-book");
const config = require("./config");

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.use(express.static("client/dist/client"));

app.use("/api", contactBookRoutes);

// Allow routing inside Angular and refresh
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/client/index.html"));
});

mongoose.connect(config.mongo.url).then(() => {
  const server = app.listen(config.express.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App listening : ${host}:${port}`);
  });
}).catch((err) => {
  console.error(`Cannot connect to MongoDB : ${err}`);
});