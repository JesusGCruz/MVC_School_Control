import Teacher from '../models/Teacher.model.js'
const teacherDaos = {};

teacherDaos.getAll = async () => {
    const teachers = await Teacher.find();
    return teachers;
}

teacherDaos.getOne = async (teacher_id) => {
    const teacher = await Teacher.findOne({teacher_id: teacher_id});
    return teacher;
}

teacherDaos.insertOne = async (teacherData) => {
    const teacherInserted = await Teacher.create(teacherData);
    return teacherInserted;
}

teacherDaos.updateOne = async (teacher_id, teacherData) => {
    const teacherUpdate = await Teacher.findOneAndUpdate({teacher_id: teacher_id}, teacherData);
    return teacherUpdate;
}

teacherDaos.deleteOne = async (teacher_id) => {
    const teacherDeleted = await Teacher.findOneAndDelete({teacher_id: teacher_id});
    return teacherDeleted;
}

export default teacherDaos;