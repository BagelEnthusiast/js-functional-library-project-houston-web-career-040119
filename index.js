const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    //collection functions (array or objects)
    each: function (collection, callback) {
      //returnArr = []
      for (let num in collection) {
        callback(collection[num])
      }

      return collection
    },

    map: function (collection, callback) {
      returnArr = []
      // debugger
      for (let num in collection) {
        returnArr.push(callback(collection[num]))
      }

      return returnArr

    },

    reduce: function (collection, callback, acc) {

      for (let num in collection) {
        acc += callback(collection[num])
      }
      return acc
    },

    find: function (collection, predicate) {
      //returnArr = []

      for (let num in collection) {
        //  debugger
        if (predicate(collection[num]) == true) {
          return collection[num]
        }
      }
    },

    filter: function (collection, predicate) {
      returnArr = []

      for (let num in collection) {
        //  debugger
        if (predicate(collection[num]) == true) {
          returnArr.push(collection[num])
        }

      }
      return returnArr
    },


    size: function (collection) {
      size = 0
      for (let num in collection) {
        size++
      }
      return size
    },

    //Array Functions
    first: function (array, n = 1) {
      returnArr = []
      for (let index = 0; index < n; index++) {
        returnArr.push(array[index])

      }
      if (returnArr.length == 1) {
        return returnArr[0]
      } else {
        return returnArr
      }
    },

    last: function (array, n = 1) {
      // array.reverse()
      //[7,5,3,1] 
      returnArr = []
      for (let index = 1; index < (n + 1); index++) {
        returnArr.push(array[array.length - index])

      }
      if (returnArr.length == 1) {
        return returnArr[0]
      } else {
        // debugger
        return returnArr
      }
    },

    compact: function (array) {
      returnArr = []
      for (let index = 0; index < array.length; index++) {
        if (array[index]) {
          returnArr.push(array[index])
        }
      }
      return returnArr
    },

    sortBy: function (array, callback) {
      returnArr = []
      function sortNumber(a, b) {
        return a - b;
      }
      for (let index = 0; index < array.length; index++) {
        returnArr.push(callback(array[index]))
        
      }

      return returnArr.sort(sortNumber)

    },

    uniq: function (array) {
      returnArr = []
      for (let index = 0; index < array.length; index++) {
        if (!returnArr.includes(array[index])) {
          returnArr.push(array[index])
        }
      }
      return returnArr
    },

    flatten: function(arrayOfNumbers) {
      returnArr = []

      a = array.join()
      b = a.split(",")
      for (let index = 0; index < b.length; index++) {
        // debugger
        returnArr.push(parseInt(b[index]))
        
      }
      return returnArr

    },

//object functions

    keys: function(object) {
      returnArr = []
      for (let num in object){
        returnArr.push(num)
      }

      return returnArr
    },

    values: function(object) {
      returnArr = []
      for (let num in object){
        returnArr.push(object[num])
      }

      return returnArr

    },

    functions: function (object) {

      returnArr = []
      for (let num in object){
        returnArr.push(num)
      }
      return returnArr.sort()
    },


  }
})()

fi.libraryMethod()



// test = [1,3,5,7]
// function isGreaterThan3(n) {
//   return n > 3
//   }

//   fi.filter(test,isGreaterThan3)