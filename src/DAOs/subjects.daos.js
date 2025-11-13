import Subject from '../models/Subject.model.js'
const subjectDaos = {};

subjectDaos.getAll = async () => {
    return await Subject.find();
}

subjectDaos.getOne = async (subject_id) => {
    return await Subject.findOne({subject_id: subject_id});
}

subjectDaos.insertOne = async (subjectData) => {
    return await Subject.create(subjectData);
}

subjectDaos.updateOne = async (subject_id, subjectData) => {
    return await Subject.findOneAndUpdate({subject_id: subject_id}, subjectData);
}

subjectDaos.deleteOne = async (subject_id) => {
    return await Subject.findOneAndDelete({subject_id: subject_id});
}

export default subjectDaos;