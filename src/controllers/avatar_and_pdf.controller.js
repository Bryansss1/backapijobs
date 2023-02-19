const Avatar_and_Pdf_Services = require("../services/avatar_and_pdf.service")


const upLoadImage=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const imageUp=req.body
        proyect.user_id=id
        const result=await Avatar_and_Pdf_Services.UpLoadImage(imageUp)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const deleteProyect=async(req,res)=>{
try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const idProyect=req.params.id
    const result=await Proyects_and_Repositories_Services.deleteseProyect(id,idProyect)
} catch (error) {
    res.status(400).json({message:"error"})
}
}

const updateProyectt=async(req,res)=>{
    try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const idProyect=req.params.id
    const newProyect=req.body
    const result=await Proyects_and_Repositories_Services.updateProyect(newProyect,idProyect,id)
    } catch (error) {
    res.status(400).json({message:"error"})
    }
}

const getAllproyectsbyUserr=async(req,res)=>{
    try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const result=await Proyects_and_Repositories_Services.getAllproyectsbyuser(id)
    res.json(result)
    } catch (error) {
    res.status(400).json({message:"error"})
    }
}

const createRepositories=async(req,res)=>{
    try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const newRepository=req.body
    newRepository.user_id=id
    const result=await Proyects_and_Repositories_Services.createRepositoriesByuser(newRepository)
    res.json(result)    
    } catch (error) {
    res.status(400).json({message:"error"})
    }
}

const deleteRepositories=async(req,res)=>{
    try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const idRepo=req.params.id
    const result=await Proyects_and_Repositories_Services.deleteRepo(id,idRepo)
    res.json(result)
    } catch (error) {
    res.status(400).json({message:"error"})
    }
}

const putRepositoriesbyUser=async(req,res)=>{
    try {
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
    const {id}=tokendecode
    const idRepo=req.params.id
    const newRepo=req.body

    const result=await Proyects_and_Repositories_Services.updatePutRepositories(newRepo,id,idRepo)
    res.json(result)
    } catch (error) {
    res.status(400).json({message:"error"})
    }
}

const getAllrepositoriesByuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await Proyects_and_Repositories_Services.getAllrepo(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}



module.exports={
getAllproyectsbyUserr,
updateProyectt,
getAllrepositoriesByuser,
deleteProyect,
putRepositoriesbyUser,
deleteRepositories,
createRepositories,
createProyects,
}