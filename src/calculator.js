function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.slice(2, delimiterLineEnd));
    numbers = numbers.slice(delimiterLineEnd + 1);
  }

  const parts = numbers.split(delimiter);
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
