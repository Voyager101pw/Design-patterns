abstract class OrderStatus {
  constructor(public name: string, private nextStatus: any) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('WaitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('Shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('Delivered', Delivered);
  }
}

class Order {
  private state = new WaitingForPayment(); // Начальное состояние

  nextState() {
    this.state = this.state.next();
  }

  getStatus() {
    console.log(this.state.name);
  }
}

// Поведение класса меняется в зависимости от его состояния (поля this.state)
const order = new Order();

order.getStatus() // WaitingForPayment
order.nextState();

order.getStatus() // Shipping
order.nextState();

order.getStatus() // Delivered

