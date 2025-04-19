const assert = require('assert');
const { add } = require('../src/calculator');

// Empty string should return 0
assert.strictEqual(add(""), 0);

// Single number returns that number
assert.strictEqual(add("1"), 1);

console.log("All tests passed!");

