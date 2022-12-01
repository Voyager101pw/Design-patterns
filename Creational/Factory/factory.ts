interface Shape {
  draw: () => void;
}

class Square implements Shape {
  draw() {
    console.log("Нарисован квадарт")
  }
}

class Triangle implements Shape {
  draw() {
    console.log("Нарисован треугольник")
  }
}

class Circle implements Shape {
  draw() {
    console.log("Нарисован круг")
  }
}

class SimpleFactory {
  // createShape - общий интерфейс для создания разных фигур
  createShape(name: 'square'| 'triangle' | 'circle') {
    if (name === "square") return new Square();
    if (name === "triangle") return new Triangle();
    if (name === "circle") return new Circle();
    return null;
  }
}

const simpleFactory = new SimpleFactory();
simpleFactory.createShape('square')?.draw();   // Нарисован квадарт
simpleFactory.createShape('triangle')?.draw(); // Нарисован треугольник
simpleFactory.createShape('circle')?.draw();   // Нарисован круг