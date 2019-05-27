// import express from 'express';
const MongoClient = require('mongodb').MongoClient;
// const PORT = process.env.PORT || 3000 
// const server = express();
const uri =  'mongodb+srv://dnourok:' + password + '@portal-lsi4f.mongodb.net/'
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(function(err,db){
  if(err){
      console.error(err);
      console.error('db', db)
  }
  else {
      console.log('connected to '+ uri);
      client.db("sample_weatherdata").collection('data').findOne({},function(err, data) {
        console.log(data)
    });
  }
})


// server.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// });









