const express = require("express");
const app = express();
const port = 3000;

const DataApp = require("./index");
const dataApp = DataApp();

app.get("/", async (req, res) => {
  let data = await dataApp.loadData();
  if (data) res.json(data);
});

app.get("/:id", async (req, res) => {
  
  let bank = dataApp.getById(req.params.id);
    console.log(bank)
  if (bank) res.json(bank);
});

app.listen(process.env.PORT || 5000)