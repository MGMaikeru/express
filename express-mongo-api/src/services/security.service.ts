import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

class SecurityService {
  async comparePassword(password: string, currentPassword: string) {
    return await bcrypt.compare(password, currentPassword);
  }

  async encryptPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async generateToken(
    _id: mongoose.Types.ObjectId,
    email: string,
    role: string
  ) {
    return await jwt.sign({ _id, email, role }, "secret", {
      expiresIn: "1h",
    });
  }
}

export const securityService = new SecurityService();
