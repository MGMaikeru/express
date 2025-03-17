import { Request } from "express";
import { UserRole } from "../src/models";

export interface JwtRequest extends Request {
  user?: {
    email: string;
    role: UserRole;
  };
}
