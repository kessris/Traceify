let express = require('express');
let router = express.Router();
const db = require('../db');
let mongodb = require('mongodb');

// Returns the complete list of all location traces
router.get('/api/location-trace', function (req, res) {
  db.get()
    .collection('locationTraces')
    .find({})
    .toArray()
    .then((result) => {
      if (result.toString() !== '') res.status(200).send(result);
      else res.status(400).send('Location Traces empty.');
    })
    .catch(() => {
      res.status(400).send('An error occurred in the database.');
    });
});

router.post('/api/location-trace', function (req, res) {
  db.get()
    .collection('locationTraces')
    .insertOne(req.body)
    .then(() => {
      res.status(200).send('ok');
    })
    .catch(() => {
      res.status(400).send('An error occurred in the database.');
    });
});

router.delete('/api/location-trace', function (req, res) {
  req.body.forEach((id) => {
    db.get()
      .collection('locationTraces')
      .remove({ _id: new mongodb.ObjectID(id) })
      .then(() => {
        if (req.body.indexOf(id) === req.body.length - 1)
          res.status(200).send('ok');
      })
      .catch(() => {
        res.status(400).send('An error occurred in the database.');
      });
  });
});

module.exports = router;
