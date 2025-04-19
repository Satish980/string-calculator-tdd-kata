const assert = require('assert');
const { add } = require('../src/calculator');

// STEP 1: Empty string should return 0
assert.strictEqual(add(""), 0);
console.log("Passed: Empty string should return 0")

// STEP 2: Single number returns that number
assert.strictEqual(add("1"), 1);
console.log("Passed: Single number returns that number")

// STEP 3: Two numbers comma separated
assert.strictEqual(add("1,2"), 3);
console.log("Passed: Two numbers comma separated")

// STEP 4: Any number of comma-separated values
assert.strictEqual(add("1,2,3,4"), 10);
console.log("Passed: Any number of comma-separated values")

// STEP 5: Handle newlines as delimiters
assert.strictEqual(add("1\n2,3"), 6);
console.log("Passed: Handle newlines as delimiters")

// STEP 6: Support custom delimiters like //;\n1;2
assert.strictEqual(add("//;\n1;2"), 3);
console.log("Passed: Support custom delimiters like //;\\n1;2")

// STEP 7: Throw on negative numbers with all values in message
try {
  add("1,-2,-5");
} catch (e) {
  // console.log(e);
  assert.strictEqual(e.message, "negatives not allowed: -2, -5");
}
console.log("Passed: Throw on negative numbers with all values in message")

// STEP 8: Ignore numbers > 1000
assert.strictEqual(add("2,1001"), 2);
console.log("Passed: Ignore numbers > 1000");

console.log("All tests passed!");

