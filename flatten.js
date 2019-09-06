// Array Flattening - Specific Layer
var flatten = (array) => {

  // console.log(`Array: ${array}`)

  return array.reduce((string,elem,i)=>{
      // If the element is not a string or array
      // Add it
      if(!(elem.length)){
          if(elem){
              string += elem;
              console.log(`1: Adding ${string}...`)
              return string + ' '
          }
      // If the element is a string
      // Add it
      } else if(typeof elem == "string"){
          if(elem){
              string += elem;
              console.log(`2: Adding ${string}...`)
              return string + ' '
          }
      // The element must be an array
      // We have to go deeper
      } else {
          console.log(`Going deeper with elem: '${elem}' from array: '${array}'`)
          string += flatten(elem)


          console.log(`3: Adding ${string}...`)
          return string;
      }
  },"")
}
console.log();
console.log("Original array:  [1, [2], [3, [[4,5,6],8]]] \t\t\t\tFlattened Array: " + flatten([1, [2], [3, [[4,5,6],8]]]));
console.log("Original array:  ['1', ['b'], [8, [[13]],[true]]] \t\tFlattened Array: " + flatten(['1', ['b'], [8, [[13]],[true]]]));
console.log();