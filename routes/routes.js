const path = require('path');
const router = require('express').Router();

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
  
router.get("/notes", (_req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

const notes = [];

router.post("/notes", function (req, res) {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  res.json(newNote);
});

module.exports = router;