// Factorial - Recursive
var factorial = (num) => {
  return (num == 1) ? num : num * factorial(num - 1)
}

// Factorial - Iterative

var factborial = (num) => {
  var product = 1;
  for(let i = 1; i <= num; i++){
    product *= i
  }
  return product;
}

console.log()
console.log(`*Recursive* Factorial    (4 => 4x3x2x1) yields: ${factorial(4)}`)
console.log(`*Iterative* Fact'b'orial (4 => 4x3x2x1) yields: ${factborial(4)}`)
console.log()