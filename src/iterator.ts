// modern languages provide abstractions for iterator pattern like when you are using map 
// pull based system (sistema de puxar)
// range function (witch exists on python ) does not exist on javascript, so you can create one using the code below..
 
 function range(start: number, end: number, step=1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start+step;
        return { value: start, done: false };
      }
      return { done: true, value: end }; 
    }
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n);   
}