const express = require('express')
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");
const emailRoute = require("./routes/emails");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/emails", emailRoute);
app.use("/ap1/v1/users", userRoute);

// SET ENVIRONMENT FOR DYNAMIC VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at port ${port}...`);
});
