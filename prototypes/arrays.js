Array.prototype.remove = function(f) {
  return (Array.from(this).filter((x) => !f(x)));
};

Array.prototype.present = function() {
  return this.length > 0;
};

Array.prototype.toMatrix = function(max) {
  const matrix = [];

  max = max > 0 ? max : 2;

  let index = max;

  while (index < (this.length + max)) {
    matrix.push(((() => {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        const x = this[i];
        if ((i >= (index - max)) && (i < index)) {
          result.push(x);
        }
      }
      return result;
    })()));
    index += max;
  }

  return matrix;
};

Array.prototype.equalTo = function(arr) {

  if (!arr) { arr = []; }

  if (this.length !== arr.length) { return false; }

  for (let index = 0; index < this.length; index++) {
    const el = this[index];
    if (!Object.isSameAs(el, arr[index])) { return false; }
  }

  return true;
};

Array.prototype.fromObj = function(obj) {

  return (() => {
    const result = [];
    for (let key of Object.keys(obj || {})) {
      const value = obj[key];
      result.push(this.push({
        key,
        value
      }));
    }
    return result;
  })();
};

//Array::splitIntoChunks = (size) ->
//    return _.chain(@).groupBy((element, index) ->
//        Math.floor index / size
//    ).toArray().value()

Array.prototype.pushArray = function(ar) {
  for (let el of Array.from(ar)) {
    this.push(el);
  }
  return this;
};

Array.prototype.getIndexBy = function(predicate) {
  for (let i = 0; i < this.length; i++) {
    const el = this[i];
    if (predicate(el)) {
      return i;
    }
  }
  return -1;
};

Array.prototype.clone = function() {
  return this.slice(0);
};
