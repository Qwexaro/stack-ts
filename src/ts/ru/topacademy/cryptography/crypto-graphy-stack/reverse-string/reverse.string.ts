import { Stack } from "../stack.ts";

export function reverseString(str: string): string {
  const stack = new Stack();
  
  for (const char of str) {
    stack.push(char);
  }

  let reversed = '';

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}
