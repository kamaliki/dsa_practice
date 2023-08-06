function rotate(nums, k) {
    const n = nums.length;
    k %= n; // Ensure k is within array bounds
  
    // Reverse the entire array
    reverse(nums, 0, n - 1);
  
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
  
    // Reverse the remaining elements
    reverse(nums, k, n - 1);

    //console.log(nums);
  }
  
  function reverse(nums, start, end) {
    //console.log(nums);
    while (start < end) {
        //console.log("start index " + start);
        //console.log("end index " + end);
      const temp = nums[start];
      //console.log("start value " + temp);
      nums[start] = nums[end];
      //console.log("change to " + nums[start]);
      nums[end] = temp;
      //console.log(temp);
      start++;
      end--;
      //console.log(nums);
    }
  }
//call the function
rotate([1,2,3,4,5,6], 2);  