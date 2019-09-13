class Singleton {
  constructor() {
    // the class constructor
    if(! Singleton.instance){
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  publicMethod() {
    console.log('Public Method');
  }
}

const instance = new Singleton();

// prevents new properties from being added to the object
Object.freeze(instance);

export default instance;
