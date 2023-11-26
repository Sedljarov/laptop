const express = require("express");
const fs = require("fs");
const path = require("path");

const insertData = require("./modules/insertData");

const PORT = 3101;
const dataDir = "data";
const templDir = "templates";

const app = express();

let dataJSON = fs.readFileSync(path.join(__dirname, dataDir, "data.json"), "utf8");
const data = JSON.parse(dataJSON);

let laptopTempl = fs.readFileSync(path.join(__dirname, templDir, "laptopTempl.html"), "utf8");

let listTempl = fs.readFileSync(path.join(__dirname, templDir, "overviewTempl.html"), "utf8");

let templ404 = fs.readFileSync(path.join(__dirname, templDir, "404Templ.html"), "utf8");

let cardTempl = fs.readFileSync(path.join(__dirname, templDir, "cardTempl.html"), "utf8");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let cards = data.map((el) => insertData(cardTempl, el)).join("\n");
  res.send(listTempl.replace("{%CARDLIST%}", cards));
});

app.get("/laptop/:id", (req, res) => {
  req.params.id >= 0 && req.params.id < data.length
    ? res.send(insertData(laptopTempl, data[req.params.id]))
    : res.status(404).send(templ404);
});

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
