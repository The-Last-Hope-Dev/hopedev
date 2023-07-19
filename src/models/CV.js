import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CVSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    experience: {
        type: String,
        required: [true, "Experience is required."],
    },
    // Otros campos que podrías agregar, como educación, habilidades, proyectos anteriores, etc.
});

export default mongoose.models.CV || mongoose.model("CV", CVSchema);
