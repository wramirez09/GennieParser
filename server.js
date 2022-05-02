const express = require("express");
const app = express();


const DataApp = require("./index");
const dataApp = DataApp();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//   next();
// });

app.get("/", async (req, res) => {
  let data = await dataApp.loadData();
  if (data) res.json(data);
});

app.get("/:id", async (req, res) => {
  
  let bank = dataApp.getById(req.params.id);
  if (bank) res.json(bank);
});

app.listen(process.env.PORT || 8000)