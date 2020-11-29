const router = require("express").Router();
const data = require("../db/db.json");
const fs = require("fs");

router.get("/notes", function (req, res) {
    res.json(data)
});


router.post("/notes", (req, res) => {
    console.log(newNote);

    data.push(req.body);
    res.json(data);
    fs.writeFile("../db/db.json", JSON.stringify(answers) + "\n", (err) =>     
        err ? console.error(err) : console.log("Thanks!"));
});

  module.exports = router;