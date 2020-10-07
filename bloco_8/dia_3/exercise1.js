const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  let arraynovo = []
  for (let index = 0; index < arrays.length; index++) {
    for (let I = 0; I < arrays[index].length; I++) {
      arraynovo.push( arrays[index][I] );
    }
  }
  return arraynovo;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);