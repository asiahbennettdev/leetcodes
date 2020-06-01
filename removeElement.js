1. Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

PREP
Parameters: array of nums and val (nums,val)
Return:new length of array nums.length
Example 1:Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.
Example 2:Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Pseudocode:
1.create function that takes in nums and val
2.create for loop to get length of array
3.compare nums if equal to val
4.remove nums 
5.retrun new length of array nums.length


var removeElement = function(nums, val) {
   for(let i=0; i<nums.length;){
       if(nums[i]=== val) nums.splice(i,1)
       else i++
   }
    return nums.length
};
