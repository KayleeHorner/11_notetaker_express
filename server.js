// Require/import the HTTP module
const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const apiRoutes = require("./routes/apiroutes.js");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});