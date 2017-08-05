String.prototype.format = function(placeholders, removeEmpty) {
  if (removeEmpty == null) {
    removeEmpty = true;
  }
  return this.replace(/{{[-_a-zA-Z0-9]+}}/g, function(match, number) {
    let matchKey;
    matchKey = match.substr(2, match.length - 4);
    if (placeholders[matchKey] || placeholders[matchKey] === 0) {
      return placeholders[matchKey];
    } else {
      if (removeEmpty) {
        return '';
      } else {
        return match;
      }
    }
  });
};

String.prototype.htmlEncode = function() {
  return String(this)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

String.prototype.stripHtmlTags = function() {
  let r;
  r = this.replace(/<\/p[^>]*>/g, '\r\n');
  r = r.replace(/<li[^>]*>/g, '\r\n- ');
  r = r.replace(/<br[^>]*>/g, '\r\n');
  r = r.replace(/&amp;/g, '&');
  r = r.replace(/&quot;/g, '"');
  return r.replace(/<(?:.|\n)*?>/gm, '');
};

String.prototype.escapeForRegEx = function() {
  return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

String.prototype.normalize = function() {
  let tmpStringArray;
  this.replace(/Â|À|Å|Ã/g, 'A')
    .replace(/â|à|å|ã/g, 'a')
    .replace(/Ä/g, 'AE')
    .replace(/ä/g, 'ae')
    .replace(/Ç/g, 'C')
    .replace(/ç/g, 'c')
    .replace(/É|Ê|È|Ë/g, 'E')
    .replace(/é|ê|è|ë/g, 'e')
    .replace(/ğ|ğ/g, 'g')
    .replace(/Ó|Ô|Ò|Õ|Ø/g, 'O')
    .replace(/ó|ô|ò|õ/g, 'o')
    .replace(/Ö/g, 'OE')
    .replace(/ö/g, 'oe')
    .replace(/Š/g, 'S')
    .replace(/š/g, 's')
    .replace(/ß/g, 'ss')
    .replace(/Ú|Û|Ù/g, 'U')
    .replace(/ú|û|ù/g, 'u')
    .replace(/Ü/g, 'UE')
    .replace(/ü/g, 'ue')
    .replace(/Ý|Ÿ/g, 'Y')
    .replace(/ý|ÿ/g, 'y')
    .replace(/Ž/g, 'Z')
    .replace(/ž/, 'z');
  tmpStringArray = [];
  _.each(this, function(char) {
    if (/^([\u0000-\u007F]+)$/.test(char)) {
      return tmpStringArray.push(char);
    }
  });
  return tmpStringArray.join('');
};

String.prototype.toHTMLFormat = function() {
  return this.htmlEncode().replace(/(?:\r\n|\r|\n)/g, '<br />');
};

String.prototype.smartSubString = function(max) {
  let cut, matches;
  if (max == null) {
    max = 250;
  }
  if (this.length <= max) {
    return this;
  }
  cut = this.substr(0, 250).replace(/\n/g, '. ');
  matches = cut.match(/.*.*?[\s,.]/);
  if (matches) {
    return matches[0];
  }
  return cut;
};

String.prototype.toUrl = function() {
  let regEx;
  regEx = /^https?:/i;
  if (!regEx.test(this)) {
    return ('http://' + this).toString();
  }
  return this;
};
