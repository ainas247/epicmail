const express = require("express");
const users = require("../userdata");
const bcrypt = require('bcrypt');
const router = express.Router();

//CREATE ACCOUT
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
    };
    users.push(user);
    res.send(user);
});

// USER CAN LOGIN
router.post("/login", (req, res) => {
    let loginUser = users.filter(
        login => login.email === req.body.email && login.password === req.body.password
    );
    if (!loginUser) res.status("404").send("No User Found");
    res.send(loginUser);
});
   

module.exports = router;
