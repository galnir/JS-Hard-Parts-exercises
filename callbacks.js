// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's'
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let arr = []
  for (let element of array) {
    arr.push(callback(element));
  }
  return arr;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

// see for yourself if your forEach works!

/*
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
*/

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let arr = [];
  array.forEach((element) => {
    arr.push(callback(element));
  });
}

//Extension 2

// take first arr[i] and check if exists at all arrays, if yes push to temp arr and repeat for rest arr i's

// arr[i] = initialValue, array is the testing array and callback is the checking logic and pushing if condition is met

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  array.forEach((element) => {
    accumulator = callback(element, accumulator)
  });
  console.log(accumulator);
}

/*
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
*/
//Extension 3
function intersection(...arrays) {
  return reduce(
    arrays,
    (checkedArr, pulledArr) => {
      let returnedArr = [];
      for (let i = 0; i < pulledArr.length; i++) {
        if (checkedArr.indexOf(pulledArr[i]) != -1) {
          returnedArr.push(pulledArr[i])
        }
      }
      return returnedArr;
    },
    arrays[0]
  );
}

/*
1. go through selected array(by i)
2. go through each element and check if exists in returned array
3. if exists ignore else push
4. procced to next array
5. return returnedArr
*/

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  let returnedArr = []
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (result.indexOf(arguments[i][j] === -1)) {
        returnedArr.push(arguments[i][j]);
      }
    }
  }
  return returnedArr;
}


// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let returnedObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      returnedObj[array1[i]] = array2[i];
    }
  }
  return returnedObj
}


// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let returnedObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    let tempArr = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      tempArr.push(arrCallbacks[j](arrVals[i]));
    }
    returnedObj[arrVals[i]] = tempArr;
  }
  return returnedObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }