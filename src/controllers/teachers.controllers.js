import teacherDaos from '../DAOs/teachers.daos.js'
const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teacherDaos.getAll()
        .then((teachers) => {
            res.render('indexTeachers.ejs', { teachers })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        });
}

teachersControllers.getOne = (req, res) => {
    teacherDaos.getOne(req.params.teacher_id)
        .then((teacher) => {
            if (teacher) {
                res.render('editTeachers.ejs', {teacher})
            } else {
                res.status(404).json({
                    message: "Teacher Not Found :(",
                    teacher_id: req.params.teacher_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        });
}

teachersControllers.insertOne = (req, res) => {
    teacherDaos.insertOne(req.body)
        .then((teacherInserted) => {
            res.redirect("/api/teachers/getAll");
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        });
}

teachersControllers.updateOne = (req, res) => {
    teacherDaos.updateOne(req.params.teacher_id, req.body)
        .then((teacherUpdated) => {
            if (teacherUpdated) {
                res.redirect("/api/teachers/getAll");
            } else {
                res.status(404).json({
                    message: "Teacher Not Found :(",
                    teacher_id: req.params.teacher_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        });
}

teachersControllers.deleteOne = (req, res) => {
    teacherDaos.deleteOne(req.params.teacher_id)
        .then((teacherDeleted) => {
            if (teacherDeleted) {
                res.redirect("/api/teachers/getAll");
            } else {
                res.status(404).json({
                    message: "Teacher Not Found :(",
                    teacher_id: req.params.teacher_id
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            })
        });
}

export default teachersControllers;