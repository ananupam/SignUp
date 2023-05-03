const express = require("express");
const cooklistRouter = express.Router();

cooklistRouter.get("/",(req,res)=>{
    res.send("get all saved recipes");
})

module.exports = cooklistRouter;