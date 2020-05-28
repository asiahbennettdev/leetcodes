1. Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

PREP
Parameter: two number and target number
Return: indicies of two numbers []
Example:Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
Pseudocode:
1. create a function (nums, target)
2. create result in empty array for indecices []
3. create for loop to iterate through first index i
4. create nested for loop to compare first index and other indecies in the array j
5. compare indecies if num1+num2 = target
6. then push num1 and num2
7. return result

var twoSum = function(nums, target) {
	  let result = [];
	  for(let i = 0; i < nums.length; i++) {
	    for(let j = 0; j < nums.length; j++) {
	      if(nums[i] + nums[j] === target) {
	        result.push(i,j)
	        return result;
	      }
	    }
    }
	};
