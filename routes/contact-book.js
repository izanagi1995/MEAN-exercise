const express = require("express");
const router = express.Router();

const PhonebookEntry = require("../models/phonebook-entry");

const hexToBase64 = (hexString) => new Buffer(hexString, "hex").toString("base64");
const base64ToHex = (base64) => new Buffer(base64, "base64").toString("hex");


router.get("/", (req, res) => {
  let query = PhonebookEntry.find({});
  if(req.query.offset && !isNaN(req.query.offset)) {
    query = query.skip(parseInt(req.query.offset));
  }

  if(req.query.limit && !isNaN(req.query.limit)) {
    query = query.limit(parseInt(req.query.limit));
  }

  query.then(data => {

    const dataWithBetterIds = data.map(entry => {

      entry = entry.toObject();

      // Zip ids for smaller format
      entry._id = hexToBase64(entry._id.toString());
      return entry;
    });

    res.json(dataWithBetterIds);
  }).catch(err => res.status(500).json(err));
});


router.post("/", (req, res) => {
  // It is safe to do that because I enforced my Mongoose Model so the validation will check that nothing bad happens here.
  // Unknown fields are deleted thanks to strict mode (see http://mongoosejs.com/docs/guide.html#strict)
  const entry = new PhonebookEntry(req.body);
  console.log("valid?", entry.validateSync());
  entry.save()
    .then((entryDB) => res.status(200).json(entryDB))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // Unzip ids
  const id = base64ToHex(req.params.id);
  PhonebookEntry.findById(id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  // Unzip ids
  const id = base64ToHex(req.params.id);
  const entry = new PhonebookEntry(req.body);
  console.log("valid?", entry.validateSync());
  PhonebookEntry.findOneAndUpdate({_id : id}, req.body, {runValidators: true})
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const id = base64ToHex(req.params.id);
  PhonebookEntry.findByIdAndDelete(id)
    .then(() => res.status(200).end())
    .catch(err => res.status(500).json(err));
});

module.exports = router;