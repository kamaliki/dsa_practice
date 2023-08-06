function evalRPN(tokens) {
    const stack = [];
  
    for (const token of tokens) {
      if (!isNaN(token)) {// if token is a number
        stack.push(Number(token));// push it to the stack
        console.log(stack);
      } else {
        const b = stack.pop();
        const a = stack.pop()
        console.log(a);
        console.log(b);
        console.log(token);
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(Math.trunc(a / b));
            break;
        }
      }
    }
  
    return stack.pop();
  }
  
  const tokens = ["2", "1", "+", "3", "*"];
  console.log(evalRPN(tokens)); // Output: 9
  