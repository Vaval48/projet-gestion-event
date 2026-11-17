
import mongoose from "mongoose";

const associationSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    statut: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
});

const Association = mongoose.model("Association", associationSchema);

export default Association;
