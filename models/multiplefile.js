const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const multiFileSchma = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
}, { timestamps: true })

module.exports = mongoose.model("multifile", multiFileSchma)