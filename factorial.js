// Factorial
var factorial = (num) => {
  return (num == 1) ? num : num * factorial(num - 1)
}
console.log()
console.log(`Factorial(4) yields: ${factorial(4)}`)
console.log()