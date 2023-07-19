import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    position: {
        type: String,
        required: [true, "Position is required."],
    },
    photoUrl: {
        type: String,
        required: [true, "Photo URL is required."],
    },
    // Puedes agregar más campos según sea necesario, como experiencia, descripción, redes sociales, etc.
});

export default mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);
