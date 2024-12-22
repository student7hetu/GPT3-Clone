const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to mongodb ${mongoose.connection.host}`.bgGreen.black);
    
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`.bgRed.white);
  }
}
 module.exports = connectDB