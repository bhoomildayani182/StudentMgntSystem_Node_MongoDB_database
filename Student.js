const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String
});

module.exports = mongoose.model('student', StudentSchema)