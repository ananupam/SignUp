const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use("/user",userRouter);

app.get('/',(req,res)=>{
    res.send('Hello, welcome to sign up')
}) 


app.listen(5004,()=>{
    console.log("SignUp is running ")
});
