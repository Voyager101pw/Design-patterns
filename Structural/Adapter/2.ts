interface Transport {
  drive: () => void;
}

class Auto implements Transport {
  drive() {
    console.log('Машина едет по дороге');
  }
}

interface Animal {
  move: () => void;
}

class Camle implements Animal { 
  move() {
    console.log('Верблюд идет по пескам пустыни');
  }
}

class Voyager {
  travel(transport: Transport) {
    transport.drive();
  }
}

class CamleTransport implements Transport {
  constructor(private animal: Animal) {
    this.animal = animal;
  }

  drive() {
    this.animal.move();
  }
}


const voyager = new Voyager(); // Путешественник
const auto = new Auto();       // Машина
voyager.travel(auto);          // Машина едет по дороге

const camle = new Camle();     // Верблюд
voyager.travel(camle);         // Ошибка, интерфейс верблюда не своместим.

const camleTransport = new CamleTransport(camle); // Создаем адаптер
voyager.travel(camleTransport); // Верблюд идет по пескам пустыни