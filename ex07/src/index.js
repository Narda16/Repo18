let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray = [...new Set(numberArray)].sort((a, b) => {
  return a - b;
});
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };
