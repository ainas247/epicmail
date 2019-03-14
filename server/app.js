const express = require('express')
const userRoute = require("./routes/users");
const bodyParser = require("body-parser");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userRoute);

// SET ENVIRONMENT FOR DYNAMIC VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at port ${port}...`);
});
