const pipe = (...functions) => {
  if (functions.length === 0) throw new Error('The function pipe needs some arguments');
  return functions.reduce((acc, current) => current(acc));
}

const square = x => x * x;

const result = pipe(square(2), square, square);
console.log(result); // 256
