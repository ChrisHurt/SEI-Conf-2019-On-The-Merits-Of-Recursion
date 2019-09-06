// RecursionJoke
var recursionJoke = (wordArray) => {
  if(wordArray.length == 2){
      outputString = wordArray[0]
      return outputString += ` ${recursionJoke(wordArray[1])}`
  } else {
      return wordArray[0]
  }
}
console.log()
console.log(`['Recursion'] transforms to: ${recursionJoke(['Recursion'])}`)
console.log(`['Recursion',['forever.']] transforms to: ${recursionJoke(['Recursion',['forever.']])}`)
console.log(`['On',['the',['Merits',['of',['Recursion.']]]]] transforms to: ${recursionJoke(['On',['the',['Merits',['of',['Recursion.']]]]])}`)
console.log()
