const insertionSort = (arr) => {
  // loop through the array starting from 2nd element
  for (let i = 1; i < arr.length; i++) {
    // pick current element
    const curr = arr[i];
    let j = i - 1;

    // compare current element with elements in sorted sub-list
    while (j > -1 && curr < arr[j]) {
      // shift elements that are greater than current element's value
      arr[j + 1] = arr[j];
      j--;
    }

    // insert the value
    arr[j + 1] = curr;
  }

  // return result
  return arr;
};
