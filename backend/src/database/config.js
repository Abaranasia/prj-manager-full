const mongoose = require('mongoose');

const dbName = 'prjmanager';
const url = `mongodb://localhost:27017/${dbName}`;

const dbConnection = async () => {

  try {
    //await mongoose.connect(process.env.MONGODB_CNN, {
    await mongoose.connect(url, {
      //useNewUrlParser: true,
     // useUnifiedTopology: true
      // useCreateIndex: true,
      // useFindAndModify: false
    });

    console.log('~~~~ Database online ~~~~')

  } catch (error) {
    console.log("Error: ", error);
    throw new Error('error while connecting to the database');
  }
}

module.exports = {
  dbConnection
}