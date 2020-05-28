1. You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:
Input: J = "z", S = "ZZ"
Output: 0


PREP
Parameters: string of letters, Lowercase and Uppercase (S, J)
Retrun: number of stone type
Example: Input: J = "aA", S = "aAAb"
Output: 3
Pseudocode:
1. create a function stoneType(J,S)
2. make a for loop to iterate through J parameter
3. create nested for loop to iterate through S parameter
4. compare S and J if S === J
5. return number of stone



var stoneType = function(J, S) {
    let stone = 0
    for(var i = 0; i < J.length; i++){
        for(var j = 0; j < S.length; j++){
            if( J[i] === S[j]){
                stone++
            }
        }
    }
    return stone
};
