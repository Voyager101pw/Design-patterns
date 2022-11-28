interface Coffee {
  getDescription: () => string;
  getCoast: () => number;
}

class BaseCoffe implements Coffee {
  getDescription() {
    return 'Простой кофе';
  }
  getCoast() {
    return 10;
  }
}

interface CoffeDecorator {
  decorated: Coffee;
  getDescription: () => string;
  getCoast: () => number;
}

class MilkCoffee implements CoffeDecorator {
  constructor(public decorated: Coffee) {
    this.decorated = decorated;
  }

  getDescription() {
    return this.decorated.getDescription() + ' c молоком';
  }

  getCoast() {
    return this.decorated.getCoast() + 5;
  }
}

class VanillaCoffee implements CoffeDecorator {
  constructor(public decorated: Coffee) {
    this.decorated = decorated;
  }
  getDescription() {
    return this.decorated.getDescription() + ' c ванилью';
  }

  getCoast() {
    return this.decorated.getCoast() + 3;
  }
}

let coffee = new BaseCoffe();
coffee.getDescription(); // Простой кофе
coffee.getCoast();       // 10

coffee = new MilkCoffee(coffee);
coffee.getDescription(); // Простой кофе c молоком
coffee.getCoast();       // 15

coffee = new VanillaCoffee(coffee);
coffee.getDescription(); // Простой кофе c молоком c ванилью 
coffee.getCoast();       // 18
