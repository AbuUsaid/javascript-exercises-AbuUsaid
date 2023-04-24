const palindromes = function (str) {
  //   let reversedStr = str.split('').reverse().join('');
  //   return reversedStr === str;

  let processedStr = str.toLowerCase().replace(/[^a-z]/g, '');
  return processedStr === processedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
