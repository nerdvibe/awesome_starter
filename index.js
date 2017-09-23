require('./logs/logs');
require('./prototypes/dates');
require('./prototypes/numbers');
require('./prototypes/objects');
require('./prototypes/strings');

const { generalCatchCallback, expressResponseError } = require('./error_handling');

module.exports.errors = {};
module.exports.errors.generalCatchCallback = generalCatchCallback;
module.exports.errors.expressResponseError = expressResponseError;
