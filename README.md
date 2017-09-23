# 🎩 awesome_starter🎢
A simple NodeJS starter kit featuring better logging, multiple prototypes for strings, arrays, objects, numbers and dates.

### Why?
Nobody likes to repeat themselfs. Here is my package with the most common helpers that I use.

# How to install & use:

- `$ npm install -S awesome_starter`
- In your main js file require awesome_starter with `require('awesome_starter');`

# Features:

### Logs:
 - New logs methods. console.success() and console.fail()
 - Timestamp on every log
 - Colors for different log levels

### General Error handling:
- `generalCatchCallback(e, functionName)` return a console.error when is needed. E.g. when you have to write many .catch(). First parameter an Error and second parameter a string for the function name.
- `expressResponseError(response, message)` It returns a json error message for express. It accepts the response from express as first parameter and an optional string as message.
- `expressResponseError(response, error ,message)` It returns a json error message for express with a console.error of the error. It accepts the response from express as first parameter, an Error as second parameter and an optional string as message.

### Multiple prototypes for the types:
Check the folder `prototypes/`


# Contribute:
- Fork this repo
- Make your improvements
- Make a PR
