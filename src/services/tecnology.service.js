
const models=require("../models/index")
const{tecnology,rol_tecnology,user_tecnology,jobs_tecnology}=models

class tecnologyServices{

static async createTecnology(tecno){
try {
    const result=await tecnology.create(tecno)
    return result 
} catch (error) {
    throw error
}
}

static async getAlltecno(){
    try {
        const result=await tecnology.findAll()
        return result
    } catch (error) {
        throw error
    }
}

static async deleteTecnologyz(id){
    try {
        const jobsTecnology=await jobs_tecnology.destroy({where:{tecnology_id:id}})
        const userTecnology=await user_tecnology.destroy({where:{tecnology_id:id}})
        const deleterolTec=await rol_tecnology.destroy({where:{tecnology_id:id}})
        const result=await tecnology.destroy({where:{id}})
        return result
    } catch (error) {
        throw error
    }
}

static async createTecnoByuser(newTecno){
    try {
        const result=await user_tecnology.create(newTecno)
        return result
    } catch (error) {
        throw error
    }
}

static async deletetecnoByuser(iduser,idtecnology){
    try {
        const result=await user_tecnology.destroy({where:{user_id:iduser,tecnology_id:idtecnology}})
        return result
    } catch (error) {
        throw error
    }
}

static async getAllusertecno(id){
    try {
        const result=await user_tecnology.findAll({
            where:{user_id:id},
            include:{
             model:tecnology,
             as:"tecnology",
             attributes:{exclude:["id"]}   
            }
        })
        return result
    } catch (error) {
        throw error
    }
}

static async updateTecnobyuser(id,tecnoid,upbody){
    try {
    const result=await user_tecnology.update(upbody,{where:{user_id:id,tecnology_id:tecnoid}})
    return result
    } catch (error) {
    throw error
    }
}


}

module.exports=tecnologyServices