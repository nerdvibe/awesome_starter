/**
 * General purpose error logging
 **/
function generalCatchCallback(e, functionName) {
  return console.error("Error executing " + functionName + ": ", e);
}

/**
 * General internal error for express
 */
function expressResponseError_silent(response, message) {
  let errorMessage = "there was an error in the request";
  if(message)
    errorMessage = message
  response.json({ success: false, error: errorMessage });
}

/**
 * General internal error for express with console.error
 */
function expressResponseError(response, error, message) {
  let errorMessage = "there was an error in the request";
  if(message)
    errorMessage = message
  response.json({ success: false, error: errorMessage });
  console.error(error);
}

module.exports.generalCatchCallback = generalCatchCallback;
module.exports.expressResponseError_silent = expressResponseError_silent;
module.exports.expressResponseError = expressResponseError;
