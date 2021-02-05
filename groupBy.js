//This is a function to group values from array based on groupFunction
@param arr - initial arra
@param groupFunction - function for filtering criteria
@return object

const groupBy = (arr, groupFunction) => arr.reduce((prevValue, currentValue) => {
  (prevValue[groupFunction(currentValue)] ||= []).push(currentValue);
  return prevValue
  }, {});

// Examples

groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9], v => (v % 2 ? "odd" : "even"));
// { odd: [1, 3, 5, 7, 9], even: [2, 4, 6, 8] };

const colors = [
  "Apricot",
  "Brown",
  "Burgundy",
  "Cerulean",
  "Peach",
  "Pear",
  "Red",
];

groupBy(colors, v => v[0]); // group by colors name first letter
// {
//   A: ["Apricot"],
//   B: ["Brown", "Burgundy"],
//   C: ["Cerulean"],
//   P: ["Peach", "Pear"],
//   R: ["Red"],
// };
