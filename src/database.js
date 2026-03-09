//Aqui se pone la cadena de conección y se inicia la conección con mongo
import { Console } from "console";
import mongoose from "mongoose";
import dns from "dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);


mongoose.connect("mongodb+srv://JesusCruz:Jesuscruz555@ingjesus.gkiv4fg.mongodb.net/school_control?retryWrites=true&w=majority&appName=IngJesus")
    .then(() => console.log("Mongodb conected"))
    .catch((err) => console.error(err));

export default mongoose;