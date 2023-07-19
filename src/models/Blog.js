import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
    },
    content: {
        type: String,
        required: [true, "Content is required."],
    },
    author: {
        type: String,
        required: [true, "Author is required."],
    },
    // Otros campos que podrías agregar, como fecha de publicación, etiquetas, comentarios, etc.
});

export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
