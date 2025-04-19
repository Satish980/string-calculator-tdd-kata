const assert = require('assert');
const { add } = require('../src/calculator');

// STEP 1: Empty string should return 0
assert.strictEqual(add(""), 0);

// STEP 2: Single number returns that number
assert.strictEqual(add("1"), 1);

// STEP 3: Two numbers comma separated
assert.strictEqual(add("1,2"), 3);

// STEP 4: Any number of comma-separated values
assert.strictEqual(add("1,2,3,4"), 10);

console.log("All tests passed!");

