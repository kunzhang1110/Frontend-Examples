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
  function* makeIterator() {
    //generator function
    yield 1;
    yield 2;
  }

  const oneTimeIterable = makeIterator(); //an iterator is iterable
  console.log(oneTimeIterable[Symbol.iterator]() == oneTimeIterable);

  const repeatableIterable = {
    [Symbol.iterator]: makeIterator,
  };

  for (let value of oneTimeIterable) {
    console.log(value);
  }
}
iterable_example();

function symbol_iterator() {
  const obj = {
    one: 1,
    two: 2,
    [Symbol.iterator]: function* () {
      for (const key of Object.keys(this)) {
        yield this[key];
      }
    },
  };

  const iterator = obj[Symbol.iterator]();

  console.log(iterator.next()); // → {value: 1, done: false}
  console.log(iterator.next()); // → {value: 2, done: false}
  console.log(iterator.next()); // → {value: undefined, done: true}
}
symbol_iterator();
