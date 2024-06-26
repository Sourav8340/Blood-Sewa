const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to mongoDB'.bgCyan.white);
    }
    catch(error){
        console.log('mongoDB error'.bgRed.white);
    }
};

module.exports = connectDB;