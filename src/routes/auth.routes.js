const {Router}=require("express");
const { register,login, verifyEmailUser } = require("../controllers/auth.controller");

const router=Router()
router.post("/register",register)
router.post("/login",login)
router.get("/verify_email/:email/id_user/:id",verifyEmailUser)

//page
router.get("/recover_password/:email")
router.post("/recover_password/code/:code")
module.exports=router;