require('./logs/logs');
require('./prototypes/dates');
require('./prototypes/numbers');
require('./prototypes/objects');
require('./prototypes/strings');

const { generalCatchCallback } = require('./error_handling');

module.exports = generalCatchCallback;
