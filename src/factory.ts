
// Factories prevent the need to use the 'new' keyword every time

class IOSButton { }

class AndroidButton { }



// Without Factory
console.log('- without factory - ')

const os = 'ios'; // Placeholder value for os

const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton();

console.log(button1);
console.log(button2);


// With Factory
console.log(' - using factory - ')

class ButtonFactory {
  static createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

const btn1 = ButtonFactory.createButton('what ever');
const btn2 = ButtonFactory.createButton('ios');

console.log(btn1);
console.log(btn2);

