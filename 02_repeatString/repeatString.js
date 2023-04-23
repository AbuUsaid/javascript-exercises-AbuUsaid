const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  } else {
    // return string.repeat(num);
    let sentence = '';
    for (let i = 0; i < num; i++) {
      sentence += string;
    }
    return sentence;
  }
};

// Do not edit below this line
module.exports = repeatString;
