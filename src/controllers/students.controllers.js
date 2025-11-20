import studentsDaos from "../DAOs/students.daos.js";
const studentsControllers = {};
studentsControllers.getAll = (req, res) => {
    //Aqui le vamos a pedir los datos al DAO 
    //Aqui vamos a responder al cliente
    studentsDaos.getAll()
        //.then((students) => {res.json({ data: students })})
        .then(students => {
            res.json({ data: students })  
            //res.render('indexStudents.ejs', { students })
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            });
        });
};

studentsControllers.getOne = (req, res) => {
    studentsDaos.getOne(req.params.student_id)
        .then((student) => {
            //condicion ? siEsVerdadero : siEsFalso;
            student ?
                res.json({student: student}) :
                //res.render('edit.ejs', {student}) :
                res.status(404).json({
                    data: { message: "Student not found 😔" }
                });
            /*
            if (student != null) {
                res.json({
                    data: {
                        "student": student
                    }
                })
            } else {
                res.status(404).json({
            data: {
                message: "Student not found 😔"
            }
        })
    }
    */
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            });
        });
};

studentsControllers.insertOne = async (req, res) => {
    studentsDaos.insertOne(req.body)
        .then((newStudent) => {
            //res.redirect("/api/students/getAll");
            res.json({message: "student created",
                "New Student": newStudent
            });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        });
}

studentsControllers.updateOne = async (req, res) => {
    studentsDaos.updateOne(req.params.student_id, req.body)
        .then((updateStudent) => {
            //res.redirect("/api/students/getAll");
            res.json({message: "Student update"});
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        });
}

studentsControllers.deleteOne = async (req, res) => {
    studentsDaos.deleteOne(req.params.student_id)
        .then((studentDeleted) => {
            if (studentDeleted) {
                //res.redirect("/api/students/getAll");
                res.json({message: "Student Deleted"});
            } else {
                res.status(404).json({
                    message: "Student Not Found",
                    student_id: req.params.student_id
                })
            }

        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        });
}

export default studentsControllers;