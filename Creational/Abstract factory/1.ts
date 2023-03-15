interface AbstractSedan {}
class SedanA implements AbstractSedan {}
class SedanB implements AbstractSedan {}

interface AbstractCoupe {}
class CoupeA implements AbstractSedan {}
class CoupeB implements AbstractSedan {}

interface AbstractFactory {
  createSedan: () => AbstractSedan; // createSedan === factoryMethod
  createCoupe: () => AbstractCoupe; // createCoupe === factoryMethod
  // Abstract factory - image: https://i.stack.imgur.com/wEM91.png
  // Factory method vs Abstract factory:
  // https://stackoverflow.com/a/20648565
  // https://stackoverflow.com/a/2632054
}

class ConcreteFactory1 implements AbstractFactory {
  createSedan() {
    return new SedanA();
  }
  createCoupe() {
    return new CoupeB();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createSedan() {
    return new SedanA();
  }
  createCoupe() {
    return new CoupeB();
  }
}
