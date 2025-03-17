import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRole } from "../src/models";
import { JwtRequest } from "../interfaces/JwtRequest.interface";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      res.status(401).json({ message: "Unnathorized" });
      return;
    }
    token = token.replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret");
    req.body.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const authorizeRoles = (allowesRoles: UserRole[]) => {
  return (req: JwtRequest, res: Response, next: NextFunction) => {
    let token = req.header("Authorization");
    if (!token) {
      res.status(401).json({ message: "Unnathorized" });
      return;
    }
    token = token.replace("Bearer ", "");
    const { role } = Object(jwt.verify(token, "secret"));
    console.log("🚀 ~ return ~ role:", role);
    if (role && !allowesRoles.includes(role)) {
      res.status(403).json({ message: `Forbidden, you are user ${role}` });
      return;
    }
    next();
  };
};
