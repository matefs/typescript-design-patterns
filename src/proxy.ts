// proxy = substitute
// The Proxy pattern can be used as an alternative when you have a large object and don't want to duplicate it, in order to prevent excessive memory usage.


interface Car {
  brand: string;
  model: string;
  year: number;
  [property: string | symbol]: string | number;
  
}

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  
};

const carProxy = new Proxy<Car>(car, {
  get(target, property) {
    console.log(`Getting property '${String(property)}'`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property '${String(property)}' to '${value}'`);
    target[property] = value;
    return true;
  },
});

console.log(carProxy.brand); // Output: Getting property 'brand'
carProxy.model = "Corolla"; // Output: Setting property 'model' to 'Corolla'
console.log(carProxy.model); // Output: Getting property 'model'

