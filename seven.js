// given an array of integers, return indices of the first two numbers such
//  that they add up to a specific target.
// you may assume that each input would have exactly one solution,
// and you may not use the same element twice

// example

const nums = [2, 2, 5, 7, 4, 11, 15]; // [0, 3]
const target = 9;

function processTwoSums(nums, target) {
  let result = ;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        return [i, j];
      }
    }
  }
  // return result;
  // console.log(result);
}
// your code here
console.log(processTwoSums(nums, target));
