const  UserService = require("../services/user.service");
const jwt=require("jsonwebtoken");
const { async } = require("../services/user.service");
require("dotenv").config()


const deletePerfil = async (req,res) => {
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result = await UserService.deleteUser(id)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const allUsers=async(req,res)=>{
    try {
        const result=await UserService.alluser()
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateUser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const perfilUp=req.body
        const result=await UserService.upUser(perfilUp,id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getOneuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await UserService.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


const getOneuserByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await UserService.getOne(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const roluser_withTecnology=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const rolBody=req.body
        const result=await UserService.rolCreate(rolBody,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"debe haber un error con el nombre de las propiedades"})
    }
}

module.exports = {
    deletePerfil,
    allUsers,
    updateUser,
    getOneuser,
    getOneuserByid,
    roluser_withTecnology
}
