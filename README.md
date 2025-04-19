# 🧪 String Calculator TDD Kata

This is a simple Test-Driven Development (TDD) exercise to implement a string-based calculator that parses numbers and returns their sum.

---

## 📌 Tips

- ✅ Start with the simplest test case of an empty string.
- ✅ Move to one and two numbers as next steps.
- ✅ Solve problems in the simplest manner so that you're forced to write tests you may not have initially thought of.
- ✅ Refactor your code **after** each passing test.

---

## 🧩 Problem Statement

Create a simple **String Calculator** with the following method signature:

```js
int add(string numbers)
```

---

## 📥 Input

- A `string` containing numbers separated by delimiters such as:
  - Commas `,`
  - New lines `\n`
  - Custom delimiters (defined by the user)

---

## 📤 Output

- An `integer` which is the **sum** of the numbers in the input string.

---

## ✅ Examples

| Input        | Output |
|--------------|--------|
| `""`         | `0`    |
| `"1"`        | `1`    |
| `"1,5"`      | `6`    |
| `"1\n2,3"`   | `6`    |
| `"//;\n1;2"` | `3`    |

---

## 🧠 Features to Implement

1. ✅ Return `0` for an empty string.
2. ✅ Return the number itself if only one number is provided.
3. ✅ Sum of two or more comma-separated numbers.
4. ✅ Allow any number of comma-separated numbers.
5. ✅ Allow new lines between numbers (e.g. `"1\n2,3"`).
6. ✅ Support custom delimiters:
   - Format: `"//[delimiter]\n[numbers]"`
   - Example: `"//;\n1;2"` should return `3`.
7. ❌ If any **negative numbers** are passed, the method should throw an exception:
   - Error message: `"negative numbers not allowed: <negative_number>"`
   - If multiple negatives are found, list **all** in the message:
     - Example: `"negative numbers not allowed: -1, -5"`

---

## 🔁 Suggested TDD Workflow

1. Write a **failing test**.
2. Write **just enough code** to make it pass.
3. Refactor for cleanliness.
4. Commit after each step to track progress clearly.

---
