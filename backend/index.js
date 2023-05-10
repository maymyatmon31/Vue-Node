const express= require("express");
const app = express();

const dotenv=require("dotenv");
dotenv.config();
var cors = require('cors')
app.use(cors())
app.get("/", function(req,res) {
    res.send("Hello world")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})

const userRoute = require("./routes/v1/userRoute");

app.use("/api/v1/users", userRoute);

const selecteduserRoute = require("./routes/v1/finduserRoute");
app.use("/api/v1/selectedusers", selecteduserRoute);

const finditem = require("./routes/v1/finditemRoute");
app.use("/api/v1/findemail", finditem);

