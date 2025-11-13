//Aquí se genera la instancia de express (la pura configuración, no se inicializa)
import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';
import studentsRouter from './routes/students.routes.js';
import teachersRouter from './routes/teachers.routes.js';
import subjectsRouter from './routes/subjects.routes.js';

const app = express();

//Settings (set)
app.disable('x-powered-by');
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", "./src/views");

//Midderware (use)
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/students", studentsRouter);
app.use("/api/teachers", teachersRouter);
app.use("/api/subjects", subjectsRouter)

export default app;