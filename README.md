 
## **TypeScript Design Patterns in Practice**

This repository contains examples of various design patterns implemented in TypeScript. The main files can be found in the **`src`** directory.

![image](https://github.com/matefs/typescript-design-patterns/assets/30128774/74bb75b3-7733-4441-9d85-a4910249134e)




## **How to Install**

- Clone the repository:

```
git clone https://github.com/matefs/typescript-design-patterns.git
```

- Install dependencies:

```
npm install
```

- Install ts-node for running the `.ts` files:

```
npm install -g ts-node 
```

## **How to Run**

You can run the individual design pattern examples using the following command:

```
ts-node src/[PATTERN_NAME].ts
```

For example, to run the Mediator pattern example:

```
ts-node src/mediator.ts
```

### **Summary**

- Creational Patterns:
    - Singleton: Ensures that only one instance of a class is created and provides a global point of access to it.
    - Prototype: Allows objects to be cloned, providing a way to create new objects without explicitly using the **`new`** keyword.
    - Factory: Provides an interface for creating objects, but allows subclasses to decide which class to instantiate.
    - Builder: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- Structural Patterns:
    - Facade: Provides a simplified interface to a complex subsystem, making it easier to use and reducing dependencies.
    - Proxy: Provides a surrogate or placeholder for another object to control access to it, adding additional functionality.
- Behavioral Patterns:
    - Iterator: Provides a way to access elements of a collection sequentially without exposing its underlying representation.
    - Observer: Defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically.
    - Mediator: Provides a centralized way for a set of objects to communicate with each other, reducing the direct dependencies between them.
    - State: Allows an object to alter its behavior when its internal state changes, encapsulating the behavior within state-specific classes.

### **When to Refactor**

- Rule of Three:
    1. When you do something for the first time, just get it done.
    2. When you do something similar for the second time, cringe at having to repeat but do the same thing anyway.
    3. When you do something for the third time, start refactoring.


### References:

YouTube Video: "Design Patterns in TypeScript" by Fireship

- Link: https://www.youtube.com/watch?v=tv-_1er1mWI&t=6s&ab_channel=Fireship
    - Description: This video provides an in-depth explanation of various design patterns implemented in TypeScript. It covers both creational and structural patterns, along with code examples and practical insights.
Website: Refactoring Guru - Design Patterns

- Link: https://refactoring.guru/design-patterns/
    - Description: Refactoring Guru is a comprehensive online resource that provides detailed explanations and examples of various design patterns. The Design Patterns section of the website offers a wealth of information, including the principles, intent, structure, implementation details, and code examples for each pattern. It serves as a valuable reference for understanding and applying design patterns in software development.

Feel free to explore the examples and contribute to this repository. If you have any questions or suggestions, please feel free to reach out.

