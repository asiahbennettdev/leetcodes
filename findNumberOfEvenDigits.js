1.Given an array nums of integers, return how many of them contain an even number of digits.

PREP
Parameters: array of numbers
Return: number that contains even number of digits
Example 1:Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
Psuedocode:
1.create function that takes in numbers (num)
2.cycle through each number in array,
3.turn array to string
4.get the length of numbers
5.if even
6.return numbers num

var findNumbers = function(nums) {
    return nums.reduce((a,b)=> a+(b.toString().length % 2 === 0),0)
};
