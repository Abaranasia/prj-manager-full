const mongoose = require('mongoose');

const dbName = 'prjmanager';
const mongoServer= process.env.MONGODB_CNN;

console.log('mongoServer :>> ', mongoServer);
const dbConnection = async () => {

  try {   
    await mongoose.connect(`${mongoServer}/${dbName}`);
    console.log('~~~~ Database online ~~~~')

  } catch (error) {
    console.log("Error: ", error);
    throw new Error('error while connecting to the database');
  }
}

module.exports = {
  dbConnection
}