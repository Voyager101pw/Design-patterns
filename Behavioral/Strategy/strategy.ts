// Интерфейс задает общую сигнатуру для всех классов стратегий,
// чтобы они были взаимозаменяемы в контексте.
interface Strategy {
  doAlgorithm: (arr: any[]) => any[];
}

// Конкретные Стратегии реализуют алгоритм, следуя базовому интерфейсу
// Стратегии. Этот интерфейс делает их взаимозаменяемыми в Контексте.
class Strategy1 implements Strategy {
  // Конкретные стратегии реализуют различные вариации алгоритма.
  doAlgorithm(arr: any[]) {
    console.log('Algorithm №1 (sort) is running');
    return arr.sort();
  }
}
class Strategy2 implements Strategy {
  doAlgorithm(arr: any[]) {
    console.log('Algorithm №2 (reverse) is running');
    return arr.reverse();
  }
}

// Контекст определяет интерфейс, представляющий интерес для клиентов.
class Context {
  // Контекст хранит ссылку на один из объектов Стратегии.
  // Контекст не знает конкретного класса стратегии. Он должен
  // работать со всеми стратегиями через интерфейс Стратегии.

  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  // Обычно Контекст позволяет заменить объект Стратегии во время
  // выполнения.
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  doAlgorith(data: any[]) {
    // Вместо того, чтобы самостоятельно реализовывать множественные версии
    // алгоритма, Контекст делегирует некоторую работу объекту Стратегии
    return this.strategy.doAlgorithm(data);
  }
}

// Клиентский код выбирает конкретную стратегию и передаёт её в контекст.
const context = new Context(
  new Strategy1(), // Клиент должен знать о различиях между стратегиями, чтобы сделать правильный выбор
);

context.doAlgorith([1, 5, 3]);
// Algorithm №1 is running
// [ 1, 3, 5 ]

context.setStrategy(new Strategy2());

context.doAlgorith([1, 5, 3]);
// Algorithm №2 is running
// [ 3, 5, 1 ]