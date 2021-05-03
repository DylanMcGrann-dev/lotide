
const tail = require('../tail');
const assert = require('chai').assert;
describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
  it('should return [2,3] for [1,2,3]',() => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
});


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3);