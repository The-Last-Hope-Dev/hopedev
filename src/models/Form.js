import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FormSchema = Schema({
    ip: {
        type: String,
        required: [true, "IP required."]
    },
    email: {
        type: String,
        required: [true, "Email required."]
    },
    message: {
        type: String,
    }
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);