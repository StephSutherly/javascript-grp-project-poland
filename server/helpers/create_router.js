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

  // patch request
  router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    collection.update(
      // Location: { name value key: value }
      { _id: ObjectID(id) },
      { $set: updatedData }
    ).then(result => {
      res.json(result.value);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err })
    })
  });


  return router;
};

module.exports = createRouter;
