function foo(a) {
  if (a == null) {
    return 0; // This will cause issues for a value of 0
  }
  return a + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(0));   // Output: 1 (Unexpected)