const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if (array1 == undefined && array2 == undefined) return undefined;
  if (array1 == [] && array2 == []) return [];
  if (array1 == undefined || array1 == []) return array2;
  if (array2 == undefined || array2 == []) return array1;
  return [...array1, ...array2];
}
module.exports = concatArray
