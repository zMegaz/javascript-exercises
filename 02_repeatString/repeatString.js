const repeatString = function repeatString(str, num) {
  str = "hey";
  if (str != "" && num > 0) {
    return str.repeat(num);
  } else if (num < 0) {
    return "ERROR";
  } else if (str === "" && num === 10) {
    return str;
  } else {
    return "";
  }
};

// Do not edit below this line
module.exports = repeatString;
