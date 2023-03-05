function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  
  return collection;
}
function myMap(collection, callback) {
  const newArray = [];
  
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      newArray.push(callback(collection[key], key, collection));
    }
  }
  
  return newArray;
}
function myReduce(collection, callback, acc) {
  let startFrom = acc === undefined ? 1 : 0;
  let accumulator = acc === undefined ? collection[0] : acc;
    
  if (Array.isArray(collection)) {
    for (let i = startFrom; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  } else {
    for (let key in collection) {
      accumulator = callback(accumulator, collection[key], collection);
    }
  }

  return accumulator;
}
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
}
function myFilter(collection, predicate) {
  const newArray = [];
  
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        newArray.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) {
        newArray.push(collection[key]);
      }
    }
  }
  
  return newArray;
}
function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
function myLast(array, n=1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}
function mySortBy(array, callback) {
  return [...array].sort((a, b) => callback(a) - callback(b));
}
