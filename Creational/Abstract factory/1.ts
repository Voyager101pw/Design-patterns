interface ISedan {
  marka: string;
  type: string;
  model: string;
  maxSpeed: number;
  // others fields ...
}
interface ICoupe {
  marka: string;
  type: string;
  model: string;
  maxSpeed: number;
  // others fields ...
}

// Абстрактная фабрика фабрик
interface CarsFactory {
  createSedan: (model: string, maxSpeed: number) => ISedan;
  createCoupe: (model: string, maxSpeed: number) => ICoupe;
}

// Конкретная фабрика
class ToyotaFactory implements CarsFactory {
  marka = 'Toyota';

  // Concrete sedan 
  createSedan(model: string, maxSpeed: number) {
    console.log(`Седан ${this.marka} ${model} был изготовлен!`);
    const sedan = {
      marka: this.marka,
      type: 'sedan',
      model,
      maxSpeed,
    };
    return sedan;
  }

  // Concrete coupe
  createCoupe(model: string, maxSpeed: number) {
    console.log(`Купе ${this.marka} ${model} был изготовлен!`);
    const coupe = {
      marka: this.marka,
      type: 'coupe',
      model,
      maxSpeed,
    };
    return coupe;
  }
}

class FordFactory implements CarsFactory {
  marka = 'Ford';

  createSedan(model: string, maxSpeed: number) {
    console.log(`Седан ${this.marka} ${model} был изготовлен!`);
    const sedan = {
      marka: this.marka,
      type: 'sedan',
      model,
      maxSpeed,
    };
    return sedan;
  }

  createCoupe(model: string, maxSpeed: number) {
    console.log(`Купе ${this.marka} ${model} был изготовлен!`);
    const coupe = {
      marka: this.marka,
      type: 'coupe',
      model,
      maxSpeed,
    };
    return coupe;
  }
}


const toyotaFactory = new ToyotaFactory();
const camry = toyotaFactory.createSedan('Сamry', 240);

/*
  Седан Toyota Сamry был изготовлен!
  {
    marka: 'Toyota',
    type: 'sedan',
    model: 'Сamry',
    maxSpeed: 240 
  }
*/