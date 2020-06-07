1. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.


PREP
Parameters: array of numbers (num)
Result: array of numbers [num]
Example: Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Pseudocode:
1. create function nonZero with parameter num
2. iterate through array num.length
3. find the zeros inside of array
4. remove found zero at the current position in array
5. add them to the end of array
6. while keeping other numbers in same order.


var nonZero = function (num){
    for(var i = num.length - 1; i >= 0; i--){
        if(num[i] === 0){
            num.splice(i, 1)
            num.push(0)
        }
    }
     return num
}
