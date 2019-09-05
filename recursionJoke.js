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
console.log()
console.log(`['On',['the',['Merits',['of',['Recursion.']]]]] transformed to: ${recursionJoke(['On',['the',['Merits',['of',['Recursion.']]]]])}`)
console.log()