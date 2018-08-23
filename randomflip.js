function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  // Base cases
  if (n === undefined) throw new Error("n is required");
  if (n <= 0) throw new Error("n must be greater than 0");
  if (n > 1000000) throw new Error("n must be lower than 1,000,000");
  if (n === 1) return 0;
  
  // Returns a string of random 0s and 1s with length m
  // based on flip()
  function randomBinary(m){
    var binary = "";
    
    for (var i = 0; i < m; i++) {
      binary += flip() ? "1" : "0";
    }
    
    return binary;
  }

  // Get the maximum posible value as binary;
  var maxValue = n - 1;
  
  // Calculate the minimal length to express as binary
  // the maximum possible value
  var maxValueLength = maxValue.toString(2).length;
  
  var randomNumber;
  
  do {
    // Get a random number up to maxValue
    randomNumber = parseInt(randomBinary(maxValueLength), 2);
  } while (randomNumber > maxValue);
  
  return randomNumber;
}
