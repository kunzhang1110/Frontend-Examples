// ----- Iterator Example -----
function iterator_example() {
  function makeIterator(start, end) {
    let nextValue = start;

    const rangeIterator = {
      next() {
        if (nextValue < end) {
          let result = { value: nextValue, done: false };
          nextValue++;
          return result;
        }
        return { value: null, done: true };
      },
    };

    return rangeIterator;
  }

  const rangeIterator = makeIterator(1, 5);
  let result = rangeIterator.next();
  while (!result.done) {
    console.log(result.value);
    result = rangeIterator.next();
  }
}

// ----- Generator Example -----
function generator_example() {
  function* makeIterator(start, end) {
    for (let i = start; i < end; i++) {
      yield i;
    }
    return null;
  }

  const rangeGenerator = makeIterator(1, 5);
  let result = rangeGenerator.next();
  while (!result.done) {
    console.log(result.value);
    result = rangeGenerator.next();
  }
}

// ----- Iterable Example -----
function iterable_example() {
  const iterableObj = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
    },
  };

  for (let value of iterableObj) {
    console.log(value);
  }
}
iterable_example();
