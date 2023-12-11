const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1/learning');
  console.log('we are connected With Database')};

  // MONGOOSE SCHEMA
const collectionSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  lastname: String,
  about: String,
  email: String,
  location: String,
  location2: String,
  edu: String,
  prv: String,
  zip: String,
  city: String,
  password: String,
   });

 const collection = mongoose.model('learningdata' , collectionSchema);
 module.exports=collection;
