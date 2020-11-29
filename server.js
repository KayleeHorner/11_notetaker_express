// Require/import the HTTP module
const express = require("express");
const app = express();
const routes = require('./routes/routes.js')
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});