const pipe = (...functions) => {
  if (functions.length === 0) throw new Error('The function pipe needs some arguments');
  return functions.reduce((acc, current) => current(acc));
}

const double = x => x * 2;
const square = x => x * x;

const result = pipe(double(2), double, double, square);
console.log(result); // 256
