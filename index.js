// Sum all the numbers in an array, including nested arrays
function sumItems(array) {
  return array.reduce((sum, item) => {
    // if the item is an array, add the result of sumItems to sum
    // if the item is not an array, add the item to sum
    return (Array.isArray(item)) ? sum + sumItems(item) : sum + item;
  }, 0);
}

module.exports = sumItems;