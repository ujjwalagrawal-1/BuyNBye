import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddlewares.js";
import { registerUser,loginUser,logoutUser,refreshAccessToken,changeCurrentPassword,getCurrentUser,updateAccountDetails } from "../controllers/authController.js";

const router = Router()
router.route("/login").post(loginUser)
router.route("/register").post(registerUser);
//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

export default router