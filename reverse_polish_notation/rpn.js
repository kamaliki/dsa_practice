function evalRPN(tokens) {
    const operators = "+-*/";
    const stack = [];
  
    for (const t of tokens) {
      if (!operators.includes(t)) {
        stack.push(t);
      } else {
        const a = parseInt(stack.pop());
        const b = parseInt(stack.pop());
  
        switch (t) {
          case "+":
            stack.push(String(a + b));
            break;
          case "-":
            stack.push(String(b - a));
            break;
          case "*":
            stack.push(String(a * b));
            break;
          case "/":
            stack.push(String(parseInt(b / a)));
            break;
        }
      }
    }
  
    return parseInt(stack.pop());
  }
  
  const tokens = ["2", "1", "+", "3", "*"];
  console.log(evalRPN(tokens));
  