interface Fruit {}
class Apple implements Fruit  { /* creation logic */ }
class Banana implements Fruit { /* creation logic */ }
class Cherry implements Fruit { /* creation logic */ }

class SimplyFactory {
  static createFruit(name: string): Fruit {
    switch (name) {
      case 'apple':  return new Apple();
      case 'banana': return new Banana();
      case 'cherry': return new Cherry();
    }
    return null as unknown as Fruit;
  }
}

SimplyFactory.createFruit('apple')  // Apple {}
SimplyFactory.createFruit('banana') // Banana {}
SimplyFactory.createFruit('cherry') // Cherry {}

// Плюсы:
// Не раскрывает логику создания клиенту.
// Инкапсулирует создание объекта в одном месте.
// Сокращает повторяющийся код, применяя DRY
// Обращаться к вновь созданным объектам, используя общий интерфейс.
