const express = require("express");
const emails = require("../emaildata");
const router = express.Router();

//GET ALL MESSAGE
router.get("/", (req, res) => {
  res.send(emails);
});

//GET MESSAGE SENT / DRAFT AND UNREAD MESSAGE
router.get('/status/:status', (req, res) => {
    let emailStatus = emails.filter(message => message.status === req.params.status)
    if (!emailStatus) return res.status("404").send("No message found");
        res.send(emailStatus);
})

module.exports = router;
