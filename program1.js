function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    const n= nums.length;
    for(let  i = 0; i< n; i++)
    {
      while(nums[i] > 0 && nums[i] <=n && nums[nums[i] - 1] !== nums[i])
      {
               swap(nums, i ,nums[i] - 1);
      }
    }

    for(let i=0; i< n; i++)
  
    {
      if(nums[i] !== i+1)
      {
        return i+1;
            }
    }
    return n+1;
  }
    function swap(nums, i, j)
    {
          const temp = nums[i];
          nums[i]  = nums[j];
          nums[j]= temp;
    }
  
    const array =[3.4,-1,1];
    const smallestMissing = smallestMissingPositiveInteger(array);
    console.log('smallest Missing Positive int' , smallestMissing);
  
  module.exports = smallestMissingPositiveInteger;

