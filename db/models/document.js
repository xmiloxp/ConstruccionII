const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  applicant_person: {
    type: String,
    required: true,
  },
  identification_type: {
    type: String,
    required: true,
  },
  identification_number: {
    type: String,
    required: true,
    unique: true
  },
  reference_person: {
    type: String,
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const Document = mongoose.model('Note', DocumentSchema)

module.exports = { Document };
