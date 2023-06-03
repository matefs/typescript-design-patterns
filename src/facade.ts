// facade - fechado (pt-br)



class PlumbingSystem {
  pressure: number;

  constructor(){
    this.pressure = 0;
  }
  // low evel access to plubming system
  setPressure(v: number) {
    this.pressure = v;
  }
  turnOn() { console.log('Plumbing system turned on ')}
  turnOff() {console.log('Plumbing system turned off ')}
}

class ElectricalSystem {
  voltage: number;

  constructor(){
    this.voltage = 0;
  }

  // low evel access to electrical system
  setVoltage(v: number) {
    this.voltage = v;
  }
  turnOn() { console.log(` Eletrical system turned on`)}
  turnOff() { console.log(`Eletrical system turned off`)}
}

class House {

  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    console.log(`The voltage is ${this.electrical.voltage} `)

    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
    console.log(`The pressure is ${this.plumbing.pressure} `)

  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff(); 
  }

}

const client = new House(); 
client.turnOnSystems();
client.shutDown();




