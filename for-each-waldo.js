// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
    arr.forEach(function(elem, index) {
      if (elem === "Waldo")
      found(index);   // execute callback
  })
}


function actionWhenFound(index) {
  console.log("Found him at index",index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//For each executes the callback function once for each array
//converts the for loop to a for each to iterate through the elements

