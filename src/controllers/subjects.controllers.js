import subjectsDaos from '../DAOs/subjects.daos.js'
const subjectsControllers = {};

subjectsControllers.getAll = (req, res) => {
    subjectsDaos.getAll()
        .then((subjects) => {
            res.json({
                data: subjects
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error :(",
                error: err.message
            });
        });
}

subjectsControllers.getOne = (req, res) => {
    subjectsDaos.getOne(req.params.subject_id)
        .then((subject) => {
            if (subject) {
                res.json({
                    subject: subject
                })
            } else {
                res.status(404).json({
                    message: "Subject Not Found :(",
                    subject_id: req.params.subject_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error :(",
                error: err.message
            });
        });
}

subjectsControllers.insertOne = (req, res) => {
    subjectsDaos.insertOne(req.body)
        .then((subjectInserted) => {
            res.status(201).json({
                message: "Subject Inserted :)",
                data: subjectInserted
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error :(",
                error: err.message
            });
        });
}

subjectsControllers.updateOne = (req, res) => {
    subjectsDaos.updateOne(req.params.subject_id, req.body)
        .then((subjectUpdated) => {
            if (subjectUpdated) {
                res.json({
                    message: "Subject Updated :)",
                    old_data: subjectUpdated
                });
            } else {
                res.status(404).json({
                    message: "Subject Not Found :(",
                    subject_id: req.params.subject_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error :(",
                error: err.message
            });
        });
}

subjectsControllers.deleteOne = (req, res) => {
    subjectsDaos.deleteOne(req.params.subject_id)
        .then((subjectDeleted) => {
            if (subjectDeleted) {
                res.json({
                    message: "Subject Deleted :)",
                    data_deleted: subjectDeleted
                })
            } else {
                res.status(404).json({
                    message: "Subject Not Found :(",
                    subject_id: req.params.subject_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error :(",
                error: err.message
            });
        });
}

export default subjectsControllers;