// RecursionJoke
var recursionJoke = (wordArray) => {
    debugger;
    if(wordArray.length == 2){
        outputString = wordArray[0]
        return outputString += ` ${recursionJoke(wordArray[1])}`
    } else {
        return wordArray[0]
    }
}

console.log(recursionJoke(['On',['the',['Merits',['of',['Recursion.']]]]]))


// Factorial
var factorial = (num) => {
    return (num == 1) ? num : num * factorial(num - 1)
}

console.log(factorial(4))

// Array Flattening - Specific Layer