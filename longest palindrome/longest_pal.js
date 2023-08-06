function longestPalindrome2(s) {
    if (s === null) return null;
    if (s.length <= 1) return s;
  
    let maxLen = 0;
    let longestStr = null;
    const length = s.length;
    const table = Array.from({ length }, () => Array(length).fill(0));
  
    // Every single letter is a palindrome
    for (let i = 0; i < length; i++) {
      table[i][i] = 1;
    }
    printTable(table);
  
    // Two consecutive same letters are palindrome
    for (let i = 0; i <= length - 2; i++) {
      if (s.charAt(i) === s.charAt(i + 1)) {
        table[i][i + 1] = 1;
        longestStr = s.substring(i, i + 2);
      }
    }
    printTable(table);
  
    // Condition to calculate the whole table
    for (let l = 3; l <= length; l++) {
      for (let i = 0; i <= length - l; i++) {
        const j = i + l - 1;
        if (s.charAt(i) === s.charAt(j)) {
          table[i][j] = table[i + 1][j - 1];
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
  console.log(longestPalindrome2(inputString));
  