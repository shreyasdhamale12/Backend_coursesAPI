const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(ProcessingInstruction.env.MONGO_URI);
        console.log("MOngoDB Connected");
    }catch{
        console.error("MongoDB connection fail");
        process.exit(1);
    }
};

module.export = connectDB;