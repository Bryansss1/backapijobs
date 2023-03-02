const AuthServices = require("../services/auth.service")
const transporter=require("../utils/mailer")
const jwt = require("jsonwebtoken");

const register=async(req,res)=>{
    try {
    const user=req.body
    const result=await AuthServices.register(user)
if(result){
    res.status(201).json({message:"user created",result})
    await transporter.sendMail({
        to:result.email,
        from:"jobsmatch23@gmail.com",
        subject:"confirme su email",
        html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style >
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
                h1{
                text-align: center;
                }
                p{
                text-align: center;
                }
                body{
                    margin:auto;
                    background:rgba(0, 0, 255, 0.11);
                    font-family: 'Roboto Condensed', sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                a{
                    width:10%;
                    cursor: pointer;
                    color: white;
                    background-color: rgb(2, 2, 138);
                    border-radius: 10%;
                    border: none;
                    padding: 1rem;
                    text-align:center;
                    margin:auto;
                    margin-top:1rem;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Roboto Condensed', sans-serif;
                    transition: all .3s;
                }
                small{
                    display:block;
                    text-align: center;
                }
                a:hover{
                    background-color: rgb(89, 89, 245);
                }
            </style>
            <title>Document</title>
        </head>
        <body>
          <section class="seccion-verify">
            <h1>✔️CONFIRMACION DE EMAIL📱</h1>
            <p>💼Bienvenido a Jobs match tu mejor opcion a la hora de buscar trabajo :)💼</p>
            <small>presiona el boton para verificarlo</small>
            <a href="https://jobs-matches.netlify.app/#/verify/${result.email}/num/${result.id}">Verificarlo</a>
          </section>
        </section>
        </body>
        </html>`
    })
}else{res.status(400).json({message:"somethign wrong"})}
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}
//ready
const login=async(req,res)=>{
try {
const {email,password}=req.body;
!email || !password ? res.status(400).json({error:"missing data",message:"not email o password"}):""
const result=await AuthServices.login({email,password})
if(result.isValid){
    const {username,id,email}=result.findUser
    const userData={username,id,email}
    const token= AuthServices.getToken(userData);
    const user=result.findUser
    res.json({user,token:token});
}else{res.status(404).json({message:"user not found"})}
} catch (error) {
    res.status(400).json({message:"error"})
}
}

const verifyEmailUser=async(req,res)=>{
    try {
        const {email,id}=req.params
        const result=await AuthServices.verifyEmail(email,id)
        if(result){
          res.json(result)  
        }
    } catch (error) {
        res.status(400).json({message:"error la correo"})
    }
}


/*
const recover_password=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
*/















module.exports={
    register,
    login,
    verifyEmailUser
}


/*
transporter.sendMail({
    to:"juanchgamer123@gmail.com",
    from:"jobsmatch23@gmail.com",
    subject:"confirme su email",
    html:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style >
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
            h1{
            text-align: center;
            }
            p{
            text-align: center;
            }
            body{
                margin:auto;
                background:rgba(0, 0, 255, 0.11);
                font-family: 'Roboto Condensed', sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            a{
                width:10%;
                cursor: pointer;
                color: white;
                background-color: rgb(2, 2, 138);
                border-radius: 10%;
                border: none;
                padding: 1rem;
                text-align:center;
                margin:auto;
                margin-top:1rem;
                display:flex;
                align-items: center;
                justify-content: center;
                font-family: 'Roboto Condensed', sans-serif;
                transition: all .3s;
            }
            small{
                display:block;
                text-align: center;
            }
            a:hover{
                background-color: rgb(89, 89, 245);
            }
        </style>
        <title>Document</title>
    </head>
    <body>
      <section class="seccion-verify">
        <h1>✔️CONFIRMACION DE EMAIL📱</h1>
        <p>💼Bienvenido a Jobs match tu mejor opcion a la hora de buscar trabajo :)💼</p>
        <small>presiona el boton para verificarlo</small>
        <a href="http://localhost:9000/api/v1/auth/verify_email/joseRiga12@gmail.com">Verificarlo</a>
      </section>
    </section>
    </body>
    </html>`,
})
*/