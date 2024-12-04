# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript error related to loose equality (==) and its interaction with null and 0.

The bug arises from the fact that `null == 0` evaluates to `false` but `0 == 0` evaluates to `true`. This can lead to unexpected behavior in conditional statements.

## Bug Description
The `foo` function intends to handle `null` values differently than other numbers.  However, because of loose equality, the conditional incorrectly identifies `0` as `null`.

## Solution
The solution employs strict equality (===) to avoid this issue. Strict equality ensures that the type and value are checked.

## How to reproduce
1. Clone this repository.
2. Run `bug.js`. You'll see the unexpected output.
3. Run `bugSolution.js`. You'll observe the correct behavior.
