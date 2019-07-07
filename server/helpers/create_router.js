const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {
  const router = express.Router();

  // get request
  router.get('/', (req, res) => {
    collection.find().toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500)
        res.json({status: 500, error: err});
      });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection.insertOne(newData)
    .then((result) => res.json(result.ops[0]);
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err })
    });
  });

  // update request
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    delete updatedData._db;

    collection.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: updatedData}
    .then(result => {
      res.jsonn(result.value);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

  })

}
