const router = require("express").Router();
const data = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", (req, res) => {
    res.json(data)
    })

    .post("/api/notes", (req, res) => {
        console.log(data);
        req.body.id = uuidv4();

        data.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(data) + "\n", (err) =>     
            err ? console.error(err) : console.log("Added!"));
        res.json(data);
    })

    .delete("/api/notes:id", (req, res) => {
       const remove = req.params.id;
       for (const i = 0; i < data.length; i++) {
           if (data[i].id === remove) {
               data.splice(i,1)
           };
       };
            
        fs.writeFile("./db/db.json", JSON.stringify(data) + "\n", (err) =>     
            err ? console.error(err) : console.log("Deleted!"));
        res.json(data);
});

  module.exports = router;

  