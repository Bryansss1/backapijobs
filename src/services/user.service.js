const models = require("../models/index");
const bcrypt=require("bcrypt")

const {
    user,
    avatar,
    cv,
    user_tecnology,
    user_rol,
    tecnology,
    rol,
    projects,
    postulation_job_user,
    jobs,
    postulation_job_reclutier,
    match,
    jobs_rol,
    jobs_tecnology,
    company,
    repository,
    salary,
    save_jobs_user
} = models

class UserService {

    static async deleteUser(id) {
        try {
            const prote=await projects.destroy({where:{user_id:id}})
            const repo=await repository.destroy({where:{user_id:id}})
            const userrolz=await user_rol.destroy({where:{user_id:id}})
            const user_rolldelete=await user_tecnology.destroy({where:{user_id:id}})
            const delete4=await match.destroy({where:{user_id:id}})
            const finde=await jobs.findAll({where:{user_id:id}})
            const pore=await postulation_job_user.destroy({where:{user_id:id}})
            const posuser=await postulation_job_reclutier.destroy({where:{user_id:id}})
            finde.forEach(async jobb=>{
            
            const delete3=await jobs_tecnology.destroy({where:{jobs_id:jobb.id}})
            const delete2=await jobs_rol.destroy({where:{jobs_id:jobb.id}})
            const deleteSalary=await salary.destroy({where:{job_id:jobb.id}})
            const deletejobsSave=await save_jobs_user.destroy({where:{jobs_id:jobb.id}})
            })
            const delete1=await jobs.destroy({where:{user_id:id}})
            const compa=await company.destroy({where:{user_id:id}})
            const result = await user.destroy({where:{id}})
            return ({message:"user elimated success"})
        } catch (error) {
            throw error
        }
    }

    static async alluser(page,size,status){
        try {
            let options={
                limit: Number(size),
                offset: Number(page) * Number(size)
            }
            if(status){
            const result=await user.findAndCountAll({
            limit:options.limit,
            offset:options.offset,
            where:{status},
            attributes:{exclude:["password"]},
            include:[
                {model:user_rol,
                as:"user_rols",
                attributes:["rol_id"],
                include:{
                    model:rol,
                    as:"rol",
                    attributes:["name"]
                }
                },
                {model:user_tecnology,
                as:"user_tecnologies",
                attributes:["tecnology_id","years_tecnology"],
                include:{
                model:tecnology,
                as:"tecnology",
                attributes:["name"]
                }
                },
                {model:projects,
                as:"projects"
                },
                {model:repository,
                as:"repositories"
                }
            ]
            })
            return ({total:result.count,users:result.rows})
            }else{
            const result=await user.findAndCountAll({
                limit:options.limit,
                offset:options.offset,
                attributes:{exclude:["password"]},
                include:[
                    {model:user_rol,
                    as:"user_rols",
                    attributes:["rol_id"],
                    include:{
                        model:rol,
                        as:"rol",
                        attributes:["name"]
                    }
                    },
                    {model:user_tecnology,
                    as:"user_tecnologies",
                    attributes:["tecnology_id","years_tecnology"],
                    include:{
                    model:tecnology,
                    as:"tecnology",
                    attributes:["name"]
                    }
                    },
                    {model:projects,
                    as:"projects"
                    },
                    {model:repository,
                    as:"repositories"
                    }
                ]
            })
            return ({total:result.count,users:result.rows})
            }
            
        } catch (error) {
            throw error
        }
    }

    static async upUser(upUser,id){
        try {
            const findUser=await user.findByPk(id)
            upUser.email=findUser.email
            if(upUser.password){
            if(findUser.password !== upUser.password){
                const {password}=upUser;
                const hash=bcrypt.hashSync(password,10)
                upUser.password=hash;
                const result=await user.update(upUser,{where:{id}})
                return result
            }
            }else{
            upUser.password=findUser.password
            const result=await user.update(upUser,{where:{id}})
            return result 
            }
            } catch (error) {
            throw error
            }
    }

    static async getOne(id){
        try {
            const result=await user.findAll({
                attributes:{exclude:["password"]},
                where:{id},
                include:[
                    {model:user_rol,
                    as:"user_rols",
                    attributes:["rol_id"],
                    include:{
                        model:rol,
                        as:"rol",
                        attributes:["name"]
                    }
                    },
                    {model:user_tecnology,
                    as:"user_tecnologies",
                    attributes:["tecnology_id","years_tecnology"],
                    include:{
                    model:tecnology,
                    as:"tecnology",
                    attributes:["name"]
                    }
                    },
                    {model:projects,
                    as:"projects"
                    },
                    {model:repository,
                    as:"repositories"
                    }
                    /* 
                    {model:postulation_job_user,
                    as:"postulation_job_users",
                    attributes:["jobs_id","state"],
                    include:{
                    model:jobs,
                    as:"jobs",
                    attributes:{exclude:["id"]}
                    }
                    },
                    {model:jobs,
                    as:"jobs",
                    //attributes:{exclude:["id"]},
                    include:{
                    model:postulation_job_reclutier,
                    as:"postulation_job_reclutiers",
                    attributes:["user_id","state"]
                    }
                    },
                    */
                ]
            })
          
            return result
        } catch (error) {
        throw error        
    }
    }


    static async rolCreate(rolBody,iduser){
        try {
            const findd=await user_rol.findOne({where:{user_id:iduser}})
            if(findd){
            const deleteTecnology=await user_tecnology.destroy({where:{user_id:iduser}})
            const deleteRol=await user_rol.destroy({where:{user_id:iduser}})
            rolBody.forEach(async rol_user=>{
            const createrol=await user_rol.create({rol_id:rol_user.id_rol,user_id:iduser})
            rol_user.id_tecnology.forEach(async tecno=>{
            const createTecno=await user_tecnology.create({user_id:iduser,tecnology_id:tecno,years_tecnology:0})
            })
            })
            return {message:"Rol actualizado :)"}
            }else{
            rolBody.forEach(async rol_user=>{
            const createrol=await user_rol.create({rol_id:rol_user.id_rol,user_id:iduser})
            rol_user.id_tecnology.forEach(async tecno=>{
            const createTecno=await user_tecnology.create({user_id:iduser,tecnology_id:tecno,years_tecnology:0})
            })
            })
            return {message:"Rol creado :)"}
            }
        
        } catch (error) {
            throw error
        }
    }


}

module.exports = UserService