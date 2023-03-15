interface Product {}
class ConcreteProductA implements Product { /* creation logic */ }
class ConcreteProductB implements Product { /* creation logic */ }

abstract class Creator {
  public abstract factoryMethod(): Product;
  // Factory Method отвечает за создание продуктов, принадлежащих 
  // одному семейству Product (имеют одинакувую структуру)
  // но c разной реализацией (разные данные внутри).
}

class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}
