import {
  StudentDocument,
  StudentInput,
  StudentModel,
} from "../models/student.model";
class StudentService {
  async create(data: StudentDocument) {
    try {
      const student = await StudentModel.create(data);
      return student;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(email: String, student: StudentInput) {
    try {
      delete student.password;
      const updatedStudent: StudentDocument | null =
        await StudentModel.findOneAndUpdate({ email: email }, student, {
          returnOriginal: true,
        });
      if (updatedStudent) {
        updatedStudent.password = "";
      }
      return updatedStudent;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(email: String) {
    try {
      const student = await StudentModel.findOneAndDelete({ email: email });
      return student;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findByEmail(email: String) {
    try {
      const students = await StudentModel.findOne({ email: email });
      return students;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAll(): Promise<StudentDocument[]> {
    try {
      const students: StudentDocument[] = await StudentModel.find();
      return students;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export const studentService = new StudentService();
