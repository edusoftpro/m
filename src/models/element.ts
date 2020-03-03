const mongose = require('mongoose');
const elementSchema = new mongose.Schema({
    atomicNumber: {
        type: Number,
        required: true
    },
    atomicMass: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongose.model('Element', elementSchema);