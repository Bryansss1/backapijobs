const {Router}=require("express");

const { upLoadImage, deleteImage, updateImage, getAllImage, upLoadPdf, deletePdf, updatePdf, getAllPdf } = require("../controllers/avatar_and_pdf.controller")

const router=Router()

router.get("/image",getAllImage)
router.delete("/image/:id",deleteImage)
router.post("/image",upLoadImage)
router.put("/image/:id",updateImage)

router.get("/pdf",getAllPdf)
router.delete("/pdf/:id",deletePdf)
router.post("/ped",upLoadPdf)
router.put("/pdf/:id",updatePdf)

module.exports=router