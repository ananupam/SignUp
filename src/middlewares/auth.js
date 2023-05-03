const jwt = require("jsonwebtoken");
const SECRET_KEY= "SECRETAPI";

const auth = (req,res,next)=>{
    try{
        let token = req.headers.autorization;
        if(token){
            token = token.split(" ")[1];
            let user =  jwt.verify(token,SECRET_KEY);
            req.userId = user.id;
        }else{
            res.status("401").json({message:"Unauthorized user!"});
        }

        next();
    }catch(error){
        console.log(error)
        res.status("401").json({message:"Unauthorized user!"});
    }
}