const express = require("express");
const emails = require("../emaildata");
const router = express.Router();

//GET ALL MESSAGE
router.get("/", (req, res) => {
  res.send(emails);
});

//GET MESSAGE ID
router.get("/:id", (req, res) => {
  let findMessage = emails.find(email => email.id === parseInt(req.params.id));
  if (!findMessage) res.status("404").send("Message Not found");
  res.status(200).send(findMessage);
});

// SEND MESSAGE
router.post('/', (req, res) => {
  let email = {
    id: emails.length + 1,
    createdOn: req.body.createdOn,
    subject: req.body.subject,
    myMessage: req.body.myMessage,
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    parentMessageId: req.body.parentMessageId,
    status: req.body.status
  }
  if (!(req.body.subject || req.body.myMessage || req.body.receiverId)) {
    res.status('400').send(' Make sure you fill all field');
  }
  emails.push(email)
  res.send(email)
=======
//GET MESSAGE ID 
router.get('/:id', (req, res) => {
  let findMessage = emails.find((email) => email.id === parseInt(req.params.id))
  if (!findMessage) res.status('404').send('Message Not found');
  res.status(200).send(findMessage);
=======
//GET MESSAGE SENT / DRAFT AND UNREAD MESSAGE
router.get('/status/:status', (req, res) => {
    let emailStatus = emails.filter(message => message.status === req.params.status)
    if (!emailStatus) return res.status("404").send("No message found");
        res.send(emailStatus);
})

module.exports = router;


