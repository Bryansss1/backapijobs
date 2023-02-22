const jwt=require("jsonwebtoken")
require("dotenv").config()
const models=require("../models/index")
const {user}=models

const finde=user.findAll({where:{status:"admin"}})

const adminMiddleware=(req,res,next)=>{
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const decodeddd=jwt.verify(token,process.env.JWT_SECRET,{algorithms:"HS512"},(error,decode)=>{
  const pass=finde.some(users=>users.email==decodeddd.email)    
    if(pass){
      return next()
    }else{
    res.status(401).json({error:"invalid token",message:"el token no es valido,envia uno correcto"})
    }
    })
console.log(decodeddd)
}


module.exports=adminMiddleware