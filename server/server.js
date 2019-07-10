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
		const wordsCollection = db.collection('basicwords');
		const foodCollection = db.collection('foodwords');
		const wordsRouter = createRouter(wordsCollection);
		const foodRouter = createRouter(foodCollection);
		app.use('/api/basicwords', wordsRouter);
		app.use('/api/foodwords', foodRouter);
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});
