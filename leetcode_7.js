1.Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Note: All given inputs are in lowercase letters a-z.

PREP
Parameters:array of strings
Return:longest prefix string
Example:Input: ["flower","flow","flight"]
Output: "fl"
Example 2:Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function(strs) {
    let check= strs[0]
    for(let i =0; i<strs.length; i++){
        for(let j=0; j<check.length; j++){
            if(strs[i][j]!= check[j]){
                check = check.substr(0,j);
                break;
            }
        }
    } return check || "";
};
