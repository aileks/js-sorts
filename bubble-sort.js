const bubbleSort = (arr) => {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if the current val is greater than its neighbor...
      if (arr[j] > arr[j + 1]) {
        // swap them
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // return result;
  return arr;
};
