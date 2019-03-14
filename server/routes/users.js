const express = require("express");
const bodyParser = require("body-parser");
const users = require("../userdata");
const router = express.Router();

//User create account
router.post("/", (req, res) => {
    if (!req.body.email || !req.body.firstname || !req.body.lastname) {
        res.status(400).send('All Fields Required');
    }
    if (req.body.password !== req.body.confirmpassword) {
        res.status(400).send("Password Does Not Match");
    }
    let user = {
        id: users.length + 1,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    }
    users.push(user);
    res.send(user);
});
   

module.exports = router;
