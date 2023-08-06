function rotate(nums, k) {
    const n = nums.length;
    k %= n; // Ensure k is within array bounds
  
    // Reverse the entire array
    reverse(nums, 0, n - 1);
  
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
  
    // Reverse the remaining elements
    reverse(nums, k, n - 1);

    console.log(nums);
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
//call the function
rotate([1,2,3,4,5,6], 2);  