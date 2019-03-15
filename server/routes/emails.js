const express = require("express");
const emails = require("../emaildata");
const router = express.Router();

//GET ALL MESSAGE
router.get("/", (req, res) => {
  res.send(emails);
});

//GET MESSAGE ID 
router.get('/:id', (req, res) => {
  let findMessage = emails.find((email) => email.id === parseInt(req.params.id))
  if (!findMessage) res.status('404').send('Message Not found');
  res.status(200).send(findMessage);
})

module.exports = router;


