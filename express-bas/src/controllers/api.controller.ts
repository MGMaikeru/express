import { Request, Response } from "express";

export class ApiController {
  sayHello(req: Request, res: Response) {
    try {
      const response = {
        status: 200,
        message: "Hello World",
      };
      res.status(200).json(response);
    } catch (err: any) {
      console.log("🚀 ~ Controller ~ sayHello ~ err:", err);
    }
  }

  getId(req: Request, res: Response) {
    const { id } = req.params;
    console.log("🚀 :18 ~ ApiController ~ getId ~ id:", id);
    try {
      const { id } = req.params;
      const response = {
        status: 200,
        message: `Your ID is: ${id}`,
      };
      res.status(200).json(response);
    } catch (err: any) {
      console.log("🚀 ~ Controller ~ getId ~ err:", err);
    }
  }

  createUser(request: Request, response: Response) {
    const body = request.body;
    console.log("🚀 ~ ApiController ~ createUser ~ body:", body);
    try {
      const result = {
        status: 200,
        message: body,
      };
      response.status(200).json(result);
    } catch (err: any) {
      console.log("🚀 ~ Controller ~ getId ~ err:", err);
    }
  }

  updateUser(req: Request, res: Response) {
    const body = req.body;
    const { name } = req.params;
    try {
      const response = {
        status: 200,
        message: `Server updated: ${body}`,
        params: name,
      };
      res.status(200).json(response);
    } catch (err: any) {
      console.log("🚀 ~ Controller ~ updateServer ~ err:", err);
    }
  }

  deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = {
        status: 200,
        message: `User deleted: ${id}`,
      };
      res.status(200).json(response);
    } catch (err: any) {
      console.log("🚀 ~ Controller ~ deleteUser ~ err:", err);
    }
  }
}
