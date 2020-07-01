1.Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note:You must do this in-place without making a copy of the array.
Minimize the total number of operations.



PREP
Parameters: array of numbers
Return:
Example:Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Pseudocode:
1.create function that takes in array of numbers
2.loop through each number in the array, starting at the last index
3.checking if the number is greater than or equal to zero
4.if zero, use splice method to remove from its index position, and use push method to put int at end of array
5.else sort numbers in order from least to greatest



var moveZeros = function(nums){
  for(let i=nums.length-1; i>=0; i--){
    if(nums[i] === 0){
      nums.splice(i,1)
      nums.push(0)
    }
  } return nums
};


////////////////////////////////////////////////////////////////
