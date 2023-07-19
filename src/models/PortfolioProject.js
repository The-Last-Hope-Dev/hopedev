import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PortfolioProjectSchema = new Schema({
    title: {
        type: String,
        required: [true, "Project title is required."],
    },
    description: {
        type: String,
        required: [true, "Project description is required."],
    },
    // Otros campos que podrías agregar: fecha de inicio, fecha de finalización, tecnologías utilizadas, imágenes, enlaces, etc.
});

export default mongoose.models.PortfolioProject || mongoose.model("PortfolioProject", PortfolioProjectSchema);
