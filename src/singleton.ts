class Settings {

  static instance: Settings;
  public readonly mode = 'dark';

  // prevent new with private constructor
  private constructor() {

  }

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    console.log('Instance got')

    return Settings.instance;
  }

}


Settings.getInstance() // works

/* const settings = new Settings() // throws error
const settings = Settings.getInstance();  */