class Water {
  public state;

  constructor(waterState: WaterState) {
    this.state = waterState;
  }

  heat() {
    this.state.heat(this)
  }

  frost() {
    this.state.frost(this)
  }
}

abstract class WaterState {
  public abstract heat(water: Water): void;
  public abstract frost(water: Water): void;
}

class SolidWaterState implements WaterState {
  public heat(water: Water): void {
    console.log('Превращаем лед в жидкость');
    water.state = new LiquidWaterState();

  }

  public frost(water: Water): void {
    console.log('Продолжаем заморозку льда');
  }
}

class LiquidWaterState implements WaterState {
  public heat(water: Water): void {
    console.log('Превращаем жидкость в пар');
    water.state = new GasWaterState();
  }

  public frost(water: Water): void {
    console.log('Превращаем жидкость в лед');
    water.state = new SolidWaterState();
  }
}
class GasWaterState implements WaterState {
  public heat(water: Water): void {
    console.log('Пар продолжает нагреватся');
  }

  public frost(water: Water): void {
    console.log('Превращаем пар в воду')
    water.state = new LiquidWaterState();
  }
}


const water = new Water(new LiquidWaterState());
water.frost(); // Превращаем жидкость в лед
water.frost(); // Продолжаем заморозку льда
water.heat();  // Превращаем лед в жидкость
water.heat();  // Превращаем жидкость в пар
water.heat();  // Пар продолжает нагреватся
water.frost(); // Превращаем пар в воду

/*
  Паттерн состояние помог вынести поведение, зависящее от текущего состояния
  объекта, в отдельные классы, и избежать перегруженности методов объекта условными
  конструкциями, как if..else или switch.
*/