require('./logs/logs');
require('./prototypes/dates');
require('./prototypes/numbers');
require('./prototypes/objects');
require('./prototypes/strings');

const { generalCatchCallback, expressResponseError, expressResponseError_silent } = require('./error_handling');

module.exports.errors = {};
module.exports.errors.generalCatchCallback = generalCatchCallback;
module.exports.errors.expressResponseError_silent = expressResponseError_silent;
module.exports.errors.expressResponseError = expressResponseError;
