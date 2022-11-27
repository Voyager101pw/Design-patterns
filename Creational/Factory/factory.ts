interface ISquare {
  getWidth: () => string;
  getHeight: () => string;
  calcSquare: () => string;
}

class Square implements ISquare {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth = () => `${this.width} cm`;
  getHeight = () => `${this.height} cm`;
  calcSquare = () => `${this.width * this.height} cm^2`;
}

class SimpleFactory {
  createSquare = (width: number, height: number) => new Square(width, height);
}

const simpleFactory = new SimpleFactory();
const square1 = simpleFactory.createSquare(5, 5);
const square2 = simpleFactory.createSquare(10, 10);
console.log(square1.calcSquare()); // 25 cm^2
console.log(square2.calcSquare()); // 100 cm^2
