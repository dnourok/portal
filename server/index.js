// import express from 'express';
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
// const PORT = process.env.PORT || 3000 
// const server = express();

const uri =  'mongodb+srv://dnourok:' + password + '@portal-lsi4f.mongodb.net/'
const client = new MongoClient(uri, { useNewUrlParser: true });
//test
client.connect(function(err,db){
  if(err){
      console.error(err);
      console.error('db', db)
  }
  else {
    console.log('connected to '+ uri);

    client.db("sample_healthcare").collection("clients")
    .find().toArray().then((data) => {
      const clients = JSON.stringify(data);
      console.log(clients)

      // write client to a new file named patientData.js
      fs.writeFile('clientData.js', clients, (err) => {  
        if (err) throw err;
        console.log('data saved!');
      });
  
    });

    client.close();
  }
})

// server.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// });