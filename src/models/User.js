import mongoose from "mongoose";
import { EMAIL_REGEXP } from "@/utils/constants";

const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Correo electrónico requerido"],
        match: [
            EMAIL_REGEXP,
            "Correo electrónico invalido"
        ]
    },
    password: {
        type: String,
        select: false,
        required: [true, "Contraseña requerida"],
    },
    name: {
        type: String,
        required: [true, "Nombre requerido"],
        minLength: [6, "Ingrese un nombre valido"],
        maxLength: [50, "Ingrese un nombre validoc"],
    }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);