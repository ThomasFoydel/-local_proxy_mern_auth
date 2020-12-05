//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
// const uri = process.env.MONGODB_URI || 'mongodb://localhost/journalentrylist';
const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://user:testingtesting@cluster0.zq8mg.mongodb.net/<dbname>?retryWrites=true&w=majority';

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
