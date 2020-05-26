// Caching heavy functions

function cached(fn){
  // Create an object to store the results returned after each function execution.
  const cache = Object.create(null);

  // Returns the wrapped function
  return function cachedFn (str) {

    // If the cache is not hit, the function will be executed
    if ( !cache[str] ) {
        let result = fn(str);

        // Store the result of the function execution in the cache
        cache[str] = result;
    }

    return cache[str]
  }
}

// EXAMPLE

function compute(str) {
  console.log('2000s have passed');
  return 'the result';
}

const cachedCompute = cached(compute);
cachedCompute('stringa'); // '2000s have passed' 'the result'
cachedCompute('stringa'); // 'the result'
