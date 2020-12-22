const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoos.model('posts', postSchema);