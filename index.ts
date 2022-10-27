require("dotenv").config();

import bodyParser from "body-parser";

const express = require("express");
const port = process.env.PORT || 5001;
const cors = require("cors");

const app = express();

app.use(
  cors({})
);

app.use(bodyParser.urlencoded({ extended: true }));

console.log("Listening on port: " + port);

app.listen(port);