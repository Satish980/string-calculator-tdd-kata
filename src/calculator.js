function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterLineEnd));
    numbers = numbers.slice(delimiterLineEnd + 1);
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return parts.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };
