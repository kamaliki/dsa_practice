function rotate(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  
  const result = new Array(nums.length);
  
  // Rotate the last k elements and place them at the beginning of the result array
  for (let i = 0; i < k; i++) {
    result[i] = nums[nums.length - k + i];
  }
  
  let j = 0;
  
  // Rotate the remaining elements and place them after the k rotated elements in the result array
  for (let i = k; i < nums.length; i++) {
    result[i] = nums[j];
    //console.log(result);
    j++;
  }
  
  // Copy the elements from the result array back to the original nums array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }

  console.log(nums);
}

//usage
rotate([1,2,3,4,5,6], 2);