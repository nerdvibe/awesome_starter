Object.extendWith = (target, source) => {
  const result = [];
  for (let key of Object.keys(source || {})) {
    const value = source[key];
    result.push((target[key] = value));
  }
  return result;
};

Object.deleteProperty = function(obj, property) {
  obj[property] = null;
  try {
    return delete obj[property];
  } catch (e) {
    let glup;
    return (glup = null);
  }
};

Object.isSameAs = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let key of Object.keys(a || {})) {
    const value = a[key];
    if (b[key] !== value) {
      return false;
    }
  }

  return true;
};

Object.splitKeyValues = function(obj) {
  const keys = [];
  const values = [];

  for (let key of Object.keys(obj || {})) {
    const value = obj[key];
    keys.push(key);
    values.push(value);
  }

  return {
    keys,
    values,
  };
};
