const sort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  // set pointers
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // recursively sort left and right halves
  const sortedLeft = sort(left);
  const sortedRight = sort(right);

  // merge and return
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  // create empty return array
  const res = [];

  // set pointer indices
  let leftIdx = 0;
  let rightIdx = 0;

  // loop and merge
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      res.push(left[leftIdx]);
      // move left pointer to next val in left array
      leftIdx++;
    } else {
      res.push(right[rightIdx]);
      // move right pointer to next val in right array
      rightIdx++;
    }
  }

  // return result
  return res.concat(left.slice(leftIdx), right.slice(rightIdx));
};
