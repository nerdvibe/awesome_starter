/**
 * General purpose error logging
 **/
function generalCatchCallback(e, functionName) {
  return console.error("Error executing " + functionName + ": ", e);
}

/**
 * General internal error for express
 */
function expressResponseError(response, message) {
  let errorMessage = "there was an error in the request";
  if(message)
    errorMessage = message
  response.json({ success: false, error: errorMessage });
}

module.exports.generalCatchCallback = generalCatchCallback;
module.exports.expressResponseError = expressResponseError;
