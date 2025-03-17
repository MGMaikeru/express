import mongoose from "mongoose";

export type UserRole = "admin" | "student" | "teacher";

export interface StudentInput {
  name: string;
  age: number;
  isActive: boolean;
  email: string;
  avg: number;
  password: string;
  role: UserRole;
}

export interface StudentDocument extends StudentInput, mongoose.Document {}

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  avg: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  role: { type: String, required: true },
});

export const StudentModel = mongoose.model<StudentDocument>(
  "Student",
  studentSchema
);
