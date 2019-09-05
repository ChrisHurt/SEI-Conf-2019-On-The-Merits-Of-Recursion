# On the merits of Recursion -- SEI Conference 2019

## Summary
- This repository contains example code used for demonstration purposes
- This talk is given as a Lightning talk - 5 minutes or less
- Recursive and Iterative Solutions are demonstrated side-by-side
- Reasons for using and not using recursion are discussed

## Examples
- Joke Example - demonstrates a poor use of recursion, not easy to write or readable
- Array Flattening - a good use of recursion. Unknown levels of nesting are easily flattened this way. Iterative logic is  difficult to apply in this context.


## Pros
- Allows elegant solutions in specific contexts
- In some languages, like Haskell, it's the only option for repeating code blocks
- When you need an approach to handle multiple unknown layers of scope
  - Such as object and/or array nesting
  - Recursion is flexible with handling varying scopes of data

## Cons
- Typically quite complex to read and write
- Higher potential for crashing due to conflating the size of the call stack and excessive use of memory
- See https://stackoverflow.com/questions/3021/what-is-recursion-and-when-should-i-use-it?page=1&tab=votes#tab-top for reference

## The Crux
- If there's an easy iterative approach, don't use recursion - it's unneccessary and harder to maintain
- Recursion solutions are best for recursive problems, like nested data structures 