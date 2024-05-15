const mongoose = require("mongoose");

async function connectMongoDB(url){
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}

module.exports = { connectMongoDB };
