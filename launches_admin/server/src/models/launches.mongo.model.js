const mongoose = require('mongoose');
const launchSchema = require('./launches.schema');

module.exports = mongoose.model('Launch', launchSchema);
