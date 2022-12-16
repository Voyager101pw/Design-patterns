interface Product {
  getName: () => void;
}

class ConcreteProductA implements Product {
  getName() {
    console.log('Product A');
  }
}

class ConcreteProductB implements Product {
  getName() {
    console.log('Product B');
  }
}


interface Creator {
  factoryMethod: () => Product;
  // Фабричный метод - создает множество однотипных объектов
  // с одинаковой структурой но разной реализацией разными данными
}

class CreatorProductA implements Creator {
  factoryMethod() { // Фабричный метод
    return new ConcreteProductA();
  }
}

class CreatorProductB implements Creator {
  factoryMethod() { // Фабричный метод
    return new ConcreteProductB();
  }
}


const creatorProductA = new CreatorProductA();
const productA = creatorProductA.factoryMethod();
productA.getName(); // Product A

const creatorProductB = new CreatorProductB();
const productB = creatorProductB.factoryMethod();
productB.getName(); // Product B