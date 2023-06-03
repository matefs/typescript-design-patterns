// prototype = clone 


const zombie = {
  eatBrains() {
    return 'yum 🧠';
  }
}

const chad = Object.create(zombie, { name: { value: 'chad'} });

chad.__proto__;
Object.getPrototypeOf(chad);

const babyChad = Object.create(chad, { baby: { value: true } });

console.log(chad.eatBrains())


