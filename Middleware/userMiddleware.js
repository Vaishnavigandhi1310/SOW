const jwt = require("jsonwebtoken");

const S_KEY = "vaish";

const userTokenVerification = (req,res,next)=>{
if (req.body.token !== undefined && req.body.token!="") {
    try {
        const decoder = jwt.verify(req.body.token,S_KEY);
        next();
    } catch (error) {
        res.status(404).send({message:"Invalid Token",error:error})
    }    
} else {
    res.status(404).send({message:"Invalid Token ! "})
}
}
module.exports={userTokenVerification};