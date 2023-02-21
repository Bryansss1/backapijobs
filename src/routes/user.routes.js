const {Router} = require("express");

const {deletePerfil, allUsers,updateUser,getOneuser, getOneuserByid, roluser_withTecnology} = require("../controllers/user.controller");

const router = Router()

router.delete("/users",deletePerfil)
router.get("/users/all",allUsers)
router.put("/users",updateUser)
router.get("/users",getOneuser)
router.get("/users/:id",getOneuserByid)

router.post("/rol_user",roluser_withTecnology)
module.exports = router

