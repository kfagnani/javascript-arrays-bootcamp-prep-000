var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 ="tomato"
var ingredient6 = "garlic"
var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (array,element) {
  const newArray =[element,...array]
return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  const newArray =[...array,element]
  return newArray
}

