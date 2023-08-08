function longestPalindrome(s) {
    if (s === null) return null;// return null if input is null
    if (s.length <= 1) return s; // return the input if it is a single letter
  
    let maxLen = 0; //initialize the max length to 0
    let longestStr = null; //initialize the longest string to null
    const length = s.length; //get the length of the input string
    const table = Array.from({ length }, () => Array(length).fill(0)); //create a 2D array with the length of the input string
    //console.log(table);
    // Every single letter is a palindrome
    for (let i = 0; i < length; i++) {
      table[i][i] = 1; //set the value of the 2D array to 1 if the letter is a palindrome
      //console.log(table);
    }
    printTable(table);
  
    // Two consecutive same letters are palindrome
    for (let i = 0; i <= length - 2; i++) {
      if (s.charAt(i) === s.charAt(i + 1)) {
        table[i][i + 1] = 1;
        //console.log(table);
        longestStr = s.substring(i, i + 2); //get the longest string
      }
    }
    printTable(table);
  
    // Condition to calculate the whole table
    for (let l = 3; l <= length; l++) { //loop through the length of the input string
      for (let i = 0; i <= length - l; i++) {
        const j = i + l - 1;
        if (s.charAt(i) === s.charAt(j)) { //check if the first and last letter are the same
          table[i][j] = table[i + 1][j - 1]; //set the value of the 2D array to 1 if the letter is a palindrome
          if (table[i][j] === 1 && l > maxLen) {
            longestStr = s.substring(i, j + 1);
          }
        } else {
          table[i][j] = 0;
        }
        printTable(table);
      }
    }
    return longestStr;
  }
  
  function printTable(x) {
    for (const y of x) {
      console.log(y.join(" "));
    }
    console.log("------");
  }
  
  const inputString = "babad";
  console.log(longestPalindrome(inputString));
  