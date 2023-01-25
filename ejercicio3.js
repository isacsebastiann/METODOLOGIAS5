var nums =[1,2,3,4,5,6,7,8];
var R=10;
for(var i=0; i<nums.length;i++)
{
    for(var j=i+1; j<nums.length;j++)
    if(nums[i]+nums[j]==R)
    {
        console.log("nums: I"+i+ " nums:J"+j);
    }
}
console.log("R ES 10 ")
