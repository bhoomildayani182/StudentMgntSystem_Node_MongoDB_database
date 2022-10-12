const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
      },
    name: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        required: true,
      }
});

module.exports = mongoose.model('student', StudentSchema)