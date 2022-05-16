const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(401).send("Hey, this is a webhook - we only receive POST!");
});

app.post("/", (req, res) => {
  //Get Values from Body items
  console.log(req.body.combo1);
  console.log(req.body.combo2);
  
  res.status(200).send( String( Number(req.body.combo1) + Number(req.body.combo2)));


 });

app.listen(PORT, () => console.log(`  Server running on port ${PORT}`));
