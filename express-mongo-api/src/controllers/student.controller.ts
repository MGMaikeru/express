import { Request, Response } from "express";
import { securityService, studentService } from "../services";
import { StudentDocument, StudentInput } from "../models";

class StudentController {
  async delete(req: Request, res: Response) {
    try {
      const email: string = req.params.email;
      const student: StudentDocument | null = await studentService.delete(
        email
      );
      if (student === null) {
        res.status(404).json(`the user ${email} don't found`);
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json(`the user could not be deleted ${error}`);
    }
  }

  async create(req: Request, res: Response) {
    try {
      console.log(req);
      const userExists: StudentDocument | null =
        await studentService.findByEmail(req.body.email);
      if (userExists) {
        res
          .status(400)
          .json({ message: `the user ${req.body.email} already exists` });
      }

      req.body.password = await securityService.encryptPassword(
        req.body.password
      );
      const user: StudentDocument = await studentService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(`the user could not be created ${error}`);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const email: string = req.params.email;
      const student: StudentDocument | null = await studentService.update(
        email,
        req.body as StudentInput
      );
      if (student === null) {
        res.status(404).json(`the user ${email} don't found`);
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json(`the user could not be updated ${error}`);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const students: StudentDocument[] = await studentService.getAll();
      res.json(students);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export const studentController = new StudentController();
