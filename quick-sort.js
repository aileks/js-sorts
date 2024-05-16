const quicksort = (arr) => {
  // arrays of length 1 or 0 are sorted
  if (arr.length <= 1) return arr;

  // choose pivot
  const pivot = arr[0];

  // set left and right divisions
  const left = [];
  const right = [];

  // add values less than and greater than the pivot to their respective arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    if (arr[i] > pivot) right.push(arr[i]);
  }

  // sort the left and right halves
  const sortedLeft = quicksort(left);
  const sortedLeft = quicksort(right);

  // merge and return
  return sortedLeft.concat(sortedRight);
};
