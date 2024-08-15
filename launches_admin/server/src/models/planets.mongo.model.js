const mongoose = require('mongoose');
const planetSchema = require('./planets.schema');

module.exports = mongoose.model('Planet', planetSchema);
