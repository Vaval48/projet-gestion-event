
import mongoose from "mongoose";

const evenementSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    lieu: {
        type: String,
        required: true
    },
    capacite: {
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    association: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Association",
        required: true
    }
});

const Evenement = mongoose.model("Evenement", evenementSchema);

export default Evenement;
