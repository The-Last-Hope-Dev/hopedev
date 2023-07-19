import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    name: {
        type: String,
        required: [true, "Tool name is required."],
    },
    description: {
        type: String,
        required: [true, "Tool description is required."],
    },
    link: {
        type: String,
        required: [true, "Tool link is required."],
    },
    // Otros campos adicionales que podrían ser útiles, como categoría, fecha de creación, autor, etc.
});

export default mongoose.models.Tool || mongoose.model("Tool", ToolSchema);
