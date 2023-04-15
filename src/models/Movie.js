//test model
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MovieSchema = Schema({
    name: {
        type: String,
    }
});

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);