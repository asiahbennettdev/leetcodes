1. Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

PREP
Parameters: 32 bit signed integer
Return: reverse digits of integer
Example: Input: 123
Output: 321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21
Psuedocode:
1. check if the number is negative or positive
2. if negative pass positive version, whatever number is applies -1 to it
3. convert number to string
4. reverse those numbers
5. join them back together
6. if number is greater than 2**31 -1 then return 0
7. otherwise return result
    "123"
    [1,2,3]
    [3,2,1]
    321

const reverse = (x) => {
 if(x < 0) return -1 * reverse(-x);
    const result = (x+"").split('').reverse().join('');
    return (result > 2**31 -1) ? 0 : result;
};
