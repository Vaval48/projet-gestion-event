
import mongoose from "mongoose";

const inscriptionSchema = new mongoose.Schema({
    utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateur",
        required: true
    },
    evenement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Evenement",
        required: true
    },
    dateInscription: {
        type: Date,
        default: Date.now
    },
    statut: {
        type: String,
        enum: ["confirmee", "annulee"],
        default: "confirmee"
    }
});

const Inscription = mongoose.model("Inscription", inscriptionSchema);

export default Inscription;
