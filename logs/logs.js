let chalk = require("chalk");
let mapping = {
  log: {
    color: chalk.blue,
    prefix: ""
  },
  warn: {
    color: chalk.yellow,
    prefix: ""
  },
  error: {
    color: chalk.red,
    prefix: ""
  },
  success: {
    color: chalk.cyan,
    prefix: chalk.green.bold("✔"),
    message_msg: chalk.underline.white.bold
  },
  fail: {
    color: chalk.red,
    prefix:chalk.red.bold( "✘"),
    message_msg: chalk.underline.red.bold
  }
};

console.success = console.log;
console.fail = console.error;

["log", "warn", "error", "success", "fail"].forEach(function(method) {
  let oldMethod = console[method].bind(console);
  console[method] = function() {

    if(mapping[method].message_msg){

      oldMethod.apply(
        console,
        [mapping[method].color(new Date().toISOString()) + " " + mapping[method].prefix]
          .concat(mapping[method].message_msg(...arguments))
      );

    } else {

      oldMethod.apply(
        console,
        [mapping[method].color(new Date().toISOString()) + mapping[method].prefix]
          .concat(...arguments)
      );
    }
  };
});
