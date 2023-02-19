const {Router}=require("express");
const { register,login, verifyEmailUser } = require("../controllers/auth.controller");

const router=Router()
router.post("/register",register)
router.post("/login",login)
router.get("/verify_email/:email/id_user/:id",verifyEmailUser)

module.exports=router;