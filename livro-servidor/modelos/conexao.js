const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/livraria';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(uri, options);

const banco = mongoose.connection;
module.exports = banco;