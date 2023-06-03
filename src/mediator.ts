
class Airplane { 
  land() {
    console.log("landing");
  }
  name: String;

constructor(){
  this.name = 'The plane name '
}

}

class Runway {
clear: boolean;

constructor() {
this.clear = true;
}
}
 

class Tower {
  clearForLanding(runway: Runway, plane: Airplane) {
    if (runway.clear) {
      console.log(`Plane ${plane.name} is ready to go`);
    }
  }
}

// Example usage
const airplane = new Airplane();
const runway = new Runway();
runway.clear = true;

const tower = new Tower();
tower.clearForLanding(runway, airplane);


