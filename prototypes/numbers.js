Number.prototype.toRad = function() {
  return this * Math.PI / 180;
};

Number.prototype.toDeg = function() {
  return this * 180 / Math.PI;
};

Number.prototype.isFloat = function() {
  return this === +this && this !== (this | 0);
};
