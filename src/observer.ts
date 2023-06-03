// one to many relationship
// push-based system (sistema baseado em empurrar)

interface Observer {
  update(message: string): void;
}

class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

class ConcreteObserver implements Observer {
  update(message: string): void {
    console.log(`Received message: ${message}`);
  }
}

// Usage example
const subject = new Subject();
const observer = new ConcreteObserver(); 
const observer2 = new ConcreteObserver(); 


subject.attach(observer);
subject.attach(observer2);
subject.notify("Hello, observer!");

