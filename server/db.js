// mongodb+srv://dbCarStore:dbCarStorePassword@carstore.g73be.mongodb.net/?retryWrites=true&w=majority&appName=CarStore
import mongoose from "mongoose"

const connectDB =  async () => {
    try{

    const conn = await mongoose.connect(
        'mongodb+srv://dbCarStore:dbCarStorePassword@carstore.g73be.mongodb.net/CarStore?retryWrites=true&w=majority&appName=CarStore'
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;


