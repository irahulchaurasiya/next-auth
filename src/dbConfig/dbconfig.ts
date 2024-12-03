import mongoose from "mongoose";

export async function connect(){
    try {
        
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }

        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Mongo DB Connected");            
        })

        connection.on('error', (err) => {
            console.log("Mongo DB connection error", err); 
            process.exit();           
        })
        
    } catch (error) {
        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
}