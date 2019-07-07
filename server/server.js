const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('polish_words');
    const wordsCollection = db.collection('words');
    const wordsRouter = createRouter(wordsCollection));
    app.use('/api/words', wordsRouter);
  })
  .catch(console.err);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});
