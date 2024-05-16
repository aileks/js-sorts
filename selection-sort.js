const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // set min location - the *selection* in selection sort
    let minIdx = i;

    // use the min to compare values
    for (let j = i + 1; j < arr.length; j++) {
      // swap location if val at minIdx is larger
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    // swap the if val minIdx is changed during previous loop
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  // return result
  return arr;
};
