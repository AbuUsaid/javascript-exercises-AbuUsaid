const removeFromArray = function (Arr, ...elements) {
  return Arr.filter((element) => !elements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
