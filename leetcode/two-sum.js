/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let indexNumberOfList = [];

  for (let index = 0; index < nums.length - 1; index++) {
    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        indexNumberOfList.push(index);
        indexNumberOfList.push(j);
        return indexNumberOfList;
      }
    }
  }

  return indexNumberOfList;
}

const array = [3, 2, 4];
const target = 6;

const result = twoSum(array, target);
console.log(result);
