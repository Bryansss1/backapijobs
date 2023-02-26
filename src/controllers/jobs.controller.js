const JobsServices = require("../services/jobs.service")
const jwt = require("jsonwebtoken");

const createJobb=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const {title,description,image,company_id,country,work_place,working_day,tecnologies_job,rol_job_id,job_salary}=req.body
        const result=await JobsServices.createJob({title,description,image,company_id,country,work_place,working_day},id)
        tecnologies_job.forEach(async tecno_id=>{
        const createJobtecno=await JobsServices.tecnology_job(tecno_id.id_tecno,result.id,tecno_id.years)
        })
        const createRoljob=await JobsServices.rol_job(rol_job_id,result.id)
        job_salary.job_id=result.id
        const createdSalary=await JobsServices.postSalary(job_salary)
        res.status(201).json({message:"job created ;)",result})
    } catch (error) {
        res.status(400).json({message:"error, puede ser que un campo no fue llenado y necesita ser registrado"})
    }
}

const updateJob=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const updateJob=req.body
        const jobId=req.params.id
        const result= await JobsServices.putJob(updateJob,id,jobId)
        res.json({message:"job update",result})
    } catch (error) {
        res.status(400).json({message:"error , puede ser un error en las propiedas"})
    }
}

const updateSalary=async(req,res)=>{
    try {
       const {id} =req.params
       const newSalary =req.body
       const result=await JobsServices.putSalary(newSalary,id)
       res.json({message:"salary update :)"},result)
    } catch (error) {
    res.status(400).json({message:"error, puede ser una propiedad mal escrita"})
    }
}


const deleJob=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const idproduct=req.params.id
        const result=await JobsServices.deleteJob(idproduct,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error al eliminar un usuario puede ser"})
    }
}

const getJobforOne=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await JobsServices.getOnejob(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error,capaz el id de ese trabajo no exista"})
    }
}

const getjobs=async(req,res)=>{
    try {
        const{page=0,size=6,rol}=req.query;
        const idRol=Number(rol)
        const result=await JobsServices.getAlljobs(page,size,idRol)
        res.json(result)
    } catch (error) {
       res.status(400).json({message:"error en la peticion"})
    }
}

const createCompany=async(req,res)=>{
    try {
        const company=req.body
        const result=await JobsServices.createCompanyy(company)
        res.status(201).json({message:"company created",result})
    } catch (error) {
        res.status(400).json({message:"error, puede ser una propiedad mal escrita o falta de informacion"})
    }
}



const upCompany=async(req,res)=>{
    try {
        const{id}=req.params
        const newUpcompany=req.body
        const result=await JobsServices.updateCompany(id,newUpcompany)
        res.json({message:"company update :)",result})
    } catch (error) {
        res.status(400).json({message:"error, revisa las propiedades y como estan escritas"})
    }
}

const deleteJobRol=async(req,res)=>{
    try {
        const {id}=req.params

        const rol_id=req.params.rolId
        const result=await JobsServices.deleteRoljob(id,rol_id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error,al eliminar el rol del trabajo"})
    }
}

const deleteTecnojob=async(req,res)=>{
    try {
        const {id}=req.params
        const tecnology_id=req.params.tecnoid
        const result=await JobsServices.deleteTecnologyjob(id,tecnology_id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error ,al eliminar la tecnologia del trabajo"})

}
}

const aggnewTecnology=async(req,res)=>{
    try {
        const {id}=req.params
        const tecnology_id=req.params.tecnoid
        const result=await JobsServices.tecnology_job(tecnology_id,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const aggrolJob=async(req,res)=>{
    try {
        const {id}=req.params
        const rol_id=req.params.rolId
        const result=await JobsServices.rol_job(rol_id,id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const jobscreateByuser=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const result=await JobsServices.getJobsbyuser(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error,puede ser token expirado"})
    }
}

const deleteCompany=async(req,res)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)
        const {id}=tokendecode
        const idcompany=req.params.id
        const result=await JobsServices.deleteCOMpany(id,idcompany)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error, puede ser que la id de esa empresa no exista"})
}
}


const infoCompany=async(req,res)=>{
    try {
        const idcompany=req.params.id
        const result=await JobsServices.getcompanyone(idcompany)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error, puede ser que el id de esta empresa no exista"})
    }
}

module.exports={
    getJobforOne,
    deleJob,
    updateJob,
    createJobb,
    getjobs,
    jobscreateByuser,
    createCompany,
    upCompany,
    deleteCompany,
    infoCompany,

    aggnewTecnology,
    
    aggrolJob,
    deleteJobRol,
    deleteTecnojob,
    updateSalary,
}