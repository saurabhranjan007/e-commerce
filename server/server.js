require("dotenv").config() // .env config
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

const flashRoutes = require("./routes/flash-data-route")
const newProductRoutes = require("./routes/new-product-route")
const loginUserRoutes = require("./routes/login-user-route")

const CLIENT_HOME_URL = process.env.CLIENT_HOME_URL 
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
const port = process.env.SERVER_PORT

const app = express(); 
app.use(express.json())
app.use(cookieParser());

// configuring cors 
app.use(
    cors({
        origin: CLIENT_HOME_URL,
        methods: 'GET, POST',
        credentials: true, 
    })
)

// home route 
app.get("/", async(req, res) => {
    res.status(200).json({
        message: "Starting server.."
    })
})

// API Endpoint initials 
app.use("/flash", flashRoutes)
app.use("/new-product", newProductRoutes)
app.use("/user", loginUserRoutes)


mongoose.connect(MONGO_CONNECTION_STRING)
    .then(() => {
        app.listen(port, async() => {
            console.log(`Server is running on port ${port}!!`);
        })
    })
    .catch((e) =>{
        console.error(`Error in starting Server, err: ${e}`);
    })
