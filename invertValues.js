// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  return array.map(x => x === 0 ? x : -x);
}

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

function invert(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = (Math.abs(array[i]) * -1)
    } else
      array[i] = Math.abs(array[i]);
  }
  return array;
}

