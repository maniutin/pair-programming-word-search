const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let transposeLetters = transpose(letters);
  const verticalJoin = transposeLetters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function (letters) {
  // Put your solution here
  let arr = [];
  for (let i = 0; i < letters[0].length; i++) {
    arr.push([]);
    placeholders = letters[i].length;
  }

  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++) {
      arr[col][row] = letters[row][col];
    }
  }
  return arr;
};

wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);

transpose([
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
]);
module.exports = wordSearch;
