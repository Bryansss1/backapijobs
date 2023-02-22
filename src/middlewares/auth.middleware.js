const jwt=require("jsonwebtoken")
require("dotenv").config()

const authMiddleware=(req,res,next)=>{
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const decodeddd=jwt.verify(token,process.env.JWT_SECRET,{algorithms:"HS512"},(error,decode)=>{
    if(error){
        res.status(401).json({error:"invalid token",message:"el token no es valido,envia uno correcto"})
    }else{next(); console.log(decode);}
    })
    console.log(decodeddd)
}


module.exports=authMiddleware