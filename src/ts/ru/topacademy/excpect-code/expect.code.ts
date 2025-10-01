export function expectCode(code: string): string {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of code) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) {
        return 'Ошибка: закрывающая скобка без открывающей';
      }
      const last = stack.pop();
      if (pairs[char] !== last) {
        return `Ошибка: скобка "${char}" не соответствует открывающей "${last}"`;
      }
    }
  }
  if (stack.length > 0) {
    return `Ошибка: отсутствует закрывающая скобка для "${stack[stack.length - 1]}"`;
  }
  return 'Скобки расставлены правильно';
}