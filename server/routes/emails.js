const express = require("express");
const emails = require("../emaildata");
const router = express.Router();

//GET ALL MESSAGE
router.get("/", (req, res) => {
  res.send(emails);
});

module.exports = router;
