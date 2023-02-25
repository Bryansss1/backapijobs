const models=require("../models/index")
const{match,postulation_job_user,postulation_job_reclutier,jobs}=models

class MatchServices{

static async getMatches(id){
try {
    const result=await match.findAll({
        attributes:{exclude:["user_id"]},
        where:{user_id:id},
        include:{
            model:jobs,
            as:"job",
        }
    })
    return result
} catch (error) {
    throw error
}
}


static async createMatch(iduser,job_id){
    try {
      const findpost=await postulation_job_user.findOne({where:{user_id:iduser,jobs_id:job_id}})
      const statuschange=await postulation_job_reclutier.update({state:"waiting response for user"},{where:{user_id:iduser,jobs_id:job_id}})
      if(findpost){
        const deleteFind=await postulation_job_user.destroy({where:{user_id:iduser,jobs_id:job_id}})
        const data=await match.create({user_id:iduser,jobs_id:job_id})
        return {message:"la postulacion a sido un exito",data}
      }else{
        return {message:"el usuario no ha postulado a este trabajo o a eliminado su postulacion"}
      }
    } catch (error) {
        throw error
    }
}

static async deleteMatch(job_id,user_id){
    try {
        const result=await match.destroy({where:{user_id,jobs_id:job_id}})
        return result
    } catch (error) {
        throw error
    }
}

}

module.exports=MatchServices