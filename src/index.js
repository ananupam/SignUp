const express = require('express');
const userRouter = require('./routes/userRoutes');
const recipeRouter = require('./routes/recipeRoutes');

const app = express();

app.use("/user",userRouter);
app.use("/recipes",recipeRouter);

app.get('/',(req,res)=>{
    res.send('Hello, welcome to sign up')
}) 


app.listen(5004,()=>{
    console.log("SignUp is running ")
});
