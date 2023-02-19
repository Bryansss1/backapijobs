const models = require("../models/index");

const {user} = models;

class Avatar_and_Pdf_Services {

    static async upLoadImage(newImage){
        try {
            const result=await user.create(newImage)
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteImage(idUser, idImage){
        try {
            const result=await user.destroy({where:{user_id:idUser,id:idImage}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateImage(newImage, idUser, idImage){
        try {
            const result=await user.update(newImage,{where:{user_id:idUser,id:idImage}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllImage(id){
        try {
            const result=await user.findAll({where:{user_id:id}})
            return result
        } catch (error) {
            throw error
        }
    }



    static async upLoadPdf(newPdf){
        try {
            const result=await user.create(newPdf)
            return result
        } catch (error) {
            throw error
        }
    }

    static async deletePdf(idPdf, idUser){
        try {
            const result=await user.destroy({where:{user_id:idUser,id:idPdf}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async updatePdf(newPdf, idUser, idPdf){
        try {
            const result=await user.update(newPdf,{where:{user_id:idUser,id:idPdf}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllPdf(id){
        try {
            const result=await user.findAll({where:{user_id:id}})
            return result
        } catch (error) {
            throw error
        }
    }

}

module.exports=Avatar_and_Pdf_Services





