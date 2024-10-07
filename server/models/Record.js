const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    time: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;