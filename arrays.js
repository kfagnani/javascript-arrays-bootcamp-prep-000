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

function destructivelyAddElementToEndOfArray (array,element) {
  array.push(element)
  return array 
}

function accessElementInArray (array,index) {
  return array [index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop ()
  return array
}

function removeElementFromEndOfArray (array) {
  const newArray = array.slice(0,array.length - 1)
return newArray
}
