//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port

// YOU MUST SET THIS TO YOUR DB CONNECTION STRING HERE
// OR IN YOUR .env FILE IF YOU WANT TO BE COOL AND SECURE
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log('Connected to Mongo');
    },
    (err) => {
      /** handle initial connection error */
      console.log('error connecting to Mongo: ');
      console.log(err);
    }
  )
  .catch((err) => console.log({ err }));

module.exports = mongoose.connection;
