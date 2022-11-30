// Observer
interface ISubscriber {
  update: () => void;
}

// Subject
interface IPublisher {
  addSubscriber: (subscriber: ISubscriber) => void;
  rmSubscriber: (subscriber: ISubscriber) => void;
  notifySubscribers: () => void;
}

class Publisher implements IPublisher {
  private subscribers: any[] = [];
  public count = 0;

  addSubscriber(subscriber: ISubscriber) {
    this.subscribers.includes(subscriber) || this.subscribers.push(subscriber);
  }

  rmSubscriber(subscriber: ISubscriber) {
    // remove subscriber logic
  }

  notifySubscribers() {
    this.subscribers.forEach((subscriber) => {
      subscriber.update();
    });
  }

  setCount(number: number) {
    this.count = number;
    this.notifySubscribers();
  }
}

class Subscriber implements ISubscriber {
  constructor(public name: string) {
    this.name = name;
  }

  update() {
    console.log(`${this.name}: Publisher is updated now`);
  }
  // Others logic....
}

const sub1 = new Subscriber('sub1');
const sub2 = new Subscriber('sub2');
const pub = new Publisher();

pub.addSubscriber(sub1);
pub.addSubscriber(sub2);

pub.setCount(10);
// sub1: Publisher is updated now
// sub2: Publisher is updated now
