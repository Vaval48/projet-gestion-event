import mongoose from "mongoose";

const connecterDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/gestionEvenements");

        console.log("Connexion à MongoDB réussie !");
    } catch (erreur) {
        console.log("Erreur de connexion à MongoDB :", erreur);
        process.exit(1);
    }
};

export default connecterDB;
