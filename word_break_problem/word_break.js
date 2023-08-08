function wordBreak(s, dict) {
    const dp = Array(s.length + 1);//create an array with the length of the input string
    dp[0] = [];//set the first element of the array to an empty array
  
    for (let i = 0; i < s.length; i++) { //loop through the length of the input string
      if (!dp[i]) {//if the element is null, continue
        continue;
      }
      console.log(dp[i]);
      for (const word of dict) { //loop through the dictionary
        const len = word.length; //get the length of the word
        console.log(len);
        const end = i + len; //get the end of the word
        if (end > s.length) { //if the end of the word is greater than the length of the input string, continue
          continue;
        }
        if (s.substring(i, end) === word) {//if the substring of the input string is equal to the word
          if (!dp[end]) { //if the element is null, set it to an empty array
            dp[end] = []; //set the element to an empty array
          }
          dp[end].push(word); //push the word to the array
        }
      }
    }
  
    const result = [];
  
    if (!dp[s.length]) {
      return result;
    }
  
    const temp = [];
    dfs(dp, s.length, result, temp);
    return result;
  }
  
  function dfs(dp, end, result, tmp) { //depth first search
    if (end <= 0) { //if the end is less than or equal to 0
      let path = tmp[tmp.length - 1]; //get the last element of the array
      for (let i = tmp.length - 2; i >= 0; i--) {
        path += " " + tmp[i]; //add the element to the path
      }
      result.push(path);//push the path to the result
      return;
    }
    
    for (const str of dp[end]) {
      tmp.push(str); //push the word to the array
      dfs(dp, end - str.length, result, tmp); //call the function recursively
      tmp.pop();//remove the last element of the array
    }
  }
  
  // Example usage
  const inputString = "catsanddog";
  const wordDict = new Set(["cat", "cats", "and", "sand", "dog"]); //create a set of words
  const wordBreakResult = wordBreak(inputString, wordDict);
  console.log(wordBreakResult);
  