import { Router } from "express";
import { ApiController } from "../controllers/api.controller";

const router = Router();

const apiController = new ApiController();
router.get("/hello", apiController.sayHello);
router.get("/getid/:id", apiController.getId);
router.post("/create", apiController.createUser);
router.put("/update/:name", apiController.updateUser);
router.delete("/delete/:id", apiController.deleteUser);

export default router;
