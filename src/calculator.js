function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterLineEnd);

    if (delimiterSection.startsWith("[")) {
      const matches = [...delimiterSection.matchAll(/\[([^\]]+)\]/g)];
      const delimiters = matches.map(m => m[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
      delimiter = new RegExp(delimiters.join("|"));
    }
    else {
      delimiter = new RegExp(numbers.slice(2, delimiterLineEnd));
    }

    numbers = numbers.slice(delimiterLineEnd + 1);
  }

  const parts = numbers.split(delimiter).map(Number).filter(n => n <= 1000);
  const negatives = parts.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return parts.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };
