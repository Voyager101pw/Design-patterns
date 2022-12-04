class Target {
  request() {
    console.log('Вызван метод request класса Target');
  }
}

class Adaptee { // Адаптируемый класс
  specificRequest() {
    console.log('Вызван метод specificRequest класса Adatee');
  }
}

class Adapter extends Target { // Адаптирующий класс
  constructor(private adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): void {
    this.adaptee.specificRequest();
  }
}

function clientCode(target: Target) {
  target.request()
}

const target = new Target();
clientCode(target); // Вызван метод request класса Target

const adaptee = new Adaptee();
clientCode(adaptee); // Error! Не совместимый интерфейс!

const adapter = new Adapter(adaptee);
clientCode(adapter); // Вызван метод specificRequest класса Adatee
