// Dates prototypes
Date.prototype.addSeconds = function(seconds) {
  let dat = new Date(this.valueOf());
  dat.setSeconds(dat.getSeconds() + seconds);
  return dat;
};

Date.prototype.addDays = function(days) {
  let dat;
  dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

Date.prototype.toUIFormat = function(withTime) {
  let date;
  date = moment(this);
  if (withTime) {
    return date.format('ddd DD MMM YYYY HH:mm');
  } else {
    return date.format('ddd DD MMM YYYY');
  }
};

Date.prototype.isDate = true;

Date.prototype.resetTime = function() {
  this.setMinutes(0);
  this.setHours(0);
  this.setSeconds(0);
  this.setMilliseconds(0);
  return this;
};
