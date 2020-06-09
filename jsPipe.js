const pipe = (init, ...functions) => {
  if (!init) throw new Error('The function pipe needs some arguments');
  if (functions.length === 0) return init;
  return functions.reduce((acc, current) => current(acc), init);
}

const double = x => x * x;

const result = pipe(double(2), double, double);
console.log(result); // 256
