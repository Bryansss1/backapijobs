const models = require("../models/index");

const { rol,rol_tecnology,tecnology,user_rol,jobs_rol } = models;

class RolService {
  static async createRol(roll) {
    try {
      const result = await rol.create(roll);
      return result;
    } catch (error) {
      throw error;
    }
  }

static async createrolTecnology(rolId,tecnoArray){
  try {
    tecnoArray.forEach(async tecno =>{
    const result=await rol_tecnology.create({rol_id:rolId,tecnology_id:tecno})
    return result
    })
  } catch (error) {
    throw error
  }
}

static async getAllrol(){
  try {
    const result=await rol.findAll({
      include:{
        model:rol_tecnology,
        as:"rol_tecnology",
        attributes:["tecnology_id"],
        include:{
          model:tecnology,
          as:"tecnology",
          attributes:["name"]
        }
      }
    })
    return result
  } catch (error) {
    throw error
  }
}

static async deleteRol(id){
  try {
    const deleteJobsrol=jobs_rol.destroy({where:{rol_id:id}})
    const deleteUserrol=user_rol.destroy({where:{rol_id:id}})
    const deleteTecno=rol_tecnology.destroy({where:{rol_id:id}})
    const result=await rol.destroy({where:{id}})
    return result
  } catch (error) {
    throw error
  }
}


static async createRolbyuser(rolnewuser){
  try {
    const result=await user_rol.create(rolnewuser)
    return result
  } catch (error) {
    throw error
  }
}

static async deleteRolByuser(iduser,rolId){
  try {
      const result=await user_rol.destroy({where:{user_id:iduser,rol_id:rolId}})
      return result
  } catch (error) {
      throw error
  }
}

static async deleteTecnoinRol(idtecno,rolId){
  try {
    const result=await rol_tecnology.destroy({where:{rol_id:rolId,tecnology_id:idtecno}})
    return result
  } catch (error) {
    throw error
  }
}


}



module.exports = RolService;
