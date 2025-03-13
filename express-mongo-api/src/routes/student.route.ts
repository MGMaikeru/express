import { Router } from "express";
import { studentController } from "../controllers";

export const studentRouter = Router();

studentRouter.get("/", studentController.findAll);
studentRouter.post("/create", studentController.create);
studentRouter.put("/update/:email", studentController.update);
studentRouter.delete("/delete/:email", studentController.delete);
