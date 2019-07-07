const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongo://localhost:27017')
  .then((client) => {
    const db = client.db('polish_words');
    const wordsCollection = db.colleciton('words');
    app.use('api/words', createRouter(wordsCollection));;
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Hotel server running on port ${this.address().port}`);
})
