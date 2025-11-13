import Student from "../models/Student.js";
const studentsDaos = {};
// Method to get all students
studentsDaos.getAll = async () => {
    //Aqui le voy a pedir paro al modelo de mongoose 
    //para extraer los estudiantes de mi cluster 😈
    const students = await Student.find();
    return students;
};
// Method to get a student by student_id
studentsDaos.getOne = async (student_id) => {
    return await Student.findOne({ student_id: student_id });
};
// Method to create a new student
studentsDaos.insertOne = async (studentData) => {
    const newStudent = await Student.create(studentData);
    return newStudent;
}
studentsDaos.updateOne = async (student_id, studentData) => {
    const updateStudent = await Student.findOneAndUpdate({student_id:student_id},studentData);
    return updateStudent;
}
studentsDaos.deleteOne = async (student_id) => {
    const deleteStudent = await Student.findOneAndDelete({student_id:student_id});
    return deleteStudent;
}

export default studentsDaos;