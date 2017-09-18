// var arr = [1,2,3,4]
// var out = arr.slice(0)
//
// // arr.slice(-n) === arr.slice(arr.length-n, arr.length)
// if (Array.isArray(collection)) {
//     for (var i = 0; i < collection.length; i++)
//         iterator(collection[i], i, collection);
// } else if(collection instanceof Object) {
//     for (var key in collection)
//         iterator(collection[key], key, collection);
// } else {
//     return collection;
// }
//
// // refactoring whole each with filter
// // var arr = []
// _.each(collection, function(item, index){
//   if (!test(item, index)) {
//     arr.push(item);
//   }
// });
// return arr;
// return _.filter(collection, function(element){ return !test(element)});

var each = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};
var indexOf = function(array, target){
  // TIP: Here's an example of a function that needs to iterate, which we've
  // implemented for you. Instead of using a standard `for` loop, though,
  // it uses the iteration helper `each`, which you will need to write.
  var result = -1;

  each(array, function(item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
};
var reduce = function(collection, iterator, accumulator) {
  if (Array.isArray(collection)){
    if (accumulator === undefined){
      accumulator = collection[0]
      for(var i = 0; i < collection.length; i++){
        accumulator = iterator(accumulator, collection[i])
      }
      return accumulator
    }
    for(var i = 0; i < collection.length; i++){
      accumulator = iterator(accumulator, collection[i])
    }

  }else{
    for(var key in collection){
      accumulator = iterator(accumulator, collection[key])
    }
  }

  return accumulator

};

var filter = function(collection, test) {
  var arr = []
  each(collection, function(item, index){
    if(test(item, index)){
        arr.push(item);
      }
    });
    return arr;
};

var uniq = function(array, isSorted, iterator) {
  var output = []
    var iteratoruniq = []
    if (iterator === undefined) {
      each(array, item => {
        indexOf(result, item) === -1 ? result.push(item) : null
      });

    } else {

      each(array, curr=> {
        if (indexOf(iteratoruniq, iterator(curr)) === -1) {
          iteratoruniq.push(iterator(curr))
          // here it's basically checking whether the current element in the
          // array is a unique element in array where the iterator has been applied.
          // if so, it pushes it to the output.
          output.push(curr)
        }
      })

    }
  return output;

};
var iterator1 = function(value) { return value === 1; };
var numbers = [1, 2, 2, 3, 4, 4];

var out = uniq(numbers, true, iterator1)

var callCount = 0;
var returnFalsy = function(total, item) {
  callCount++;
  if (callCount === 1) {
    return undefined;
  } else {
    return item + 1;
  }
};

var reduce = function(collection, iterator, accumulator) {
  if (Array.isArray(collection)){
    if (accumulator === undefined){
      accumulator = collection[0]
      for(var i = 0; i < collection.length; i++){
        accumulator = iterator(accumulator, collection[i])
      }
      return accumulator
    }
    for(var i = 0; i < collection.length; i++){
      accumulator = iterator(accumulator, collection[i])
    }

  }else{
    for(var key in collection){
      accumulator = iterator(accumulator, collection[key])
    }
  }

  return accumulator

};
var total = reduce([1,1,2], returnFalsy);

var result = reduce([3,2,1], function(memo, item) {
  return memo - item;
});

var reduce = function(collection, iterator, accumulator) {
  if (Array.isArray(collection)){
    if (accumulator === undefined) {
      accumulator = collection[0]
      for(var i = 1; i < collection.length; i++){
        accumulator = iterator(accumulator, collection[i])
      }
      return accumulator
    }
    for(var i = 0; i < collection.length; i++){
      accumulator = iterator(accumulator, collection[i])
    }
  } else{
    for(var key in collection){
      accumulator = iterator(accumulator, collection[key])
    }
  }
  return accumulator
};



var contains = function(collection, target) {
  // TIP: Many iteration problems can be most easily expressed in
  // terms of reduce(). Here's a freebie to demonstrate!
  return reduce(collection, function(wasFound, item){
    if(wasFound){
      return true;
    }
    return item === target
  }, false)
};

var res = contains([1,2], 3)
console.log(res)
