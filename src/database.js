//Aqui se pone la cadena de conección y se inicia la conección con mongo
import { Console } from "console";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://JesusCruz:Jesuscruz5@ingjesus.gkiv4fg.mongodb.net/school_control?retryWrites=true&w=majority&appName=IngJesus")
    .then(() => console.log("Mongodb conected"))
    .catch((err) => console.error(err));

export default mongoose;