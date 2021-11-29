let target = 9
let numAry = [2,7,11,15]

var twoSum = function(nums, target) {
    let len = nums.length;
    for(let i=0; i<len; i++);
    for(let j=1;j<len; j++){
    if(i+j === target){
        return(i,j)
    }
    }
};

console.log(twoSum(numAry, target))