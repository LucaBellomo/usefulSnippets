const pipe = (init, ...functions) => {
  if(functions.length === 0) throw new Error('The function must have some parameters');
  if(functions.length === 1) return functions[0];
  return functions.reduce((acc, current) => current(acc), init);
}

const double = x => x * x;


const result = pipe(double(2), double, double);
console.log(result);
