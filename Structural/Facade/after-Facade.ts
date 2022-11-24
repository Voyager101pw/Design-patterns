class Car {
  steps: number[] = [];

  startEngine() {
    this.steps.push(3);
    console.log('Завожу машину');

    this.steps.toString() === '1,2,3'
      ? console.log('Машина завелась')
      : console.log('Машина не завелась!');
    
    // ... представим что дальше идет сложная логика
  }

  setUpAcc() {
    this.steps.push(1);
    console.log('Установил аккумулятор');
    // ... представим что дальше идет сложная логика
  }

  activeKey() {
    this.steps.push(2);
    console.log('Вставил ключ');
    // ... представим что дальше идет сложная логика
  }

  // Остальные действия несвязанные с пуска двигателя
  someAction() {
    console.log('...');
    this.steps.push(10);
    // ... представим что дальше идет сложная логика
  }
}

class Facade {
  static startEngineCar() {
    const car = new Car();
    car.setUpAcc();
    car.activeKey();
    car.startEngine();
  }
}


// Класс Facade реализует паттерн Фасад,
// предоставляет простой API ввиде метода startEngineCar 
// которй снимает с нас необходимость
// - вникать в детали реализации класса Car
// - знать правильный порядок вызовов
// - знать только нужные методы для вычисления результата
Facade.startEngineCar();
