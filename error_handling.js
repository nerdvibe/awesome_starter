/**
 * General purpose error logging
 **/
function generalCatchCallback(e, functionName) {
  return console.error('Error executing ' + functionName + ': ', e);
}

module.exports.generalCatchCallback = generalCatchCallback;
