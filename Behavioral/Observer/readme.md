# Наблюдатель —  поведенческий паттерн.
## Определение
Это паттерн при котором в наблюдаемом объекте Subject создаются механизмы подписки, отписки и оповещения для того, чтобы объекты наблюдатели Observer могли следить и реагировать на события, происходящие в наблюдаемом объекте Subject.
![image](https://radioprog.ru/uploads/media/articles/0001/06/fa410a58a5b06165b1e9510b455cf43c495b6324.png)

## Пример 1
Представьте, что вы имеете два объекта: `Покупатель` и `Магазин`. В магазин вот-вот должны завезти новый товар, который интересен покупателю.

Покупатель может каждый день ходить в магазин, чтобы проверить наличие товара. Но при этом он будет злиться, без толку тратя своё драгоценное время.

![image](https://radioprog.ru/uploads/media/articles/0001/06/6aea5488bd6c4b6fdf80ab14544963391b328497.png)

С другой стороны, магазин может разослать спам каждому своему покупателю. Многих это расстроит, так как товар специфический, и не всем он нужен.

Получается конфликт: либо покупатель тратит время на периодические проверки, либо магазин тратит ресурсы на бесполезные оповещения.

### Решение
Давайте называть `Издателями` те объекты, которые содержат важное или интересное для других состояние. Остальные объекты, которые хотят отслеживать изменения этого состояния, назовём `Подписчиками`.

```
Subject / Publisher 
Observer / Subscriber
```

Паттерн Наблюдатель предлагает хранить внутри объекта издателя список ссылок на объекты подписчиков, причём издатель не должен вести список подписки самостоятельно. Он предоставит методы, с помощью которых подписчики могли бы добавлять или убирать себя из списка.

![image](https://radioprog.ru/uploads/media/articles/0001/06/3bd13129cebf1bca55947d023270254cdc2db4a8.png)

Теперь самое интересное. Когда в издателе будет происходить важное событие, он будет проходиться по списку подписчиков и оповещать их об этом, вызывая определённый метод объектов-подписчиков.

Издателю безразлично, какой класс будет иметь тот или иной подписчик, так как все они должны следовать общему интерфейсу и иметь единый метод оповещения.

![image](https://radioprog.ru/uploads/media/articles/0001/06/b9de96441d0d5c807a1f804233a7d5738499aab8.png)

Увидев, как складно всё работает, вы можете выделить общий интерфейс, описывающий методы подписки и отписки, и для всех издателей. После этого подписчики смогут работать с разными типами издателей, а также получать оповещения от них через один и тот же метод.

### Код:

```ts
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
}

const sub1 = new Subscriber('sub1');
const sub2 = new Subscriber('sub2');
const pub = new Publisher();

pub.addSubscriber(sub1);
pub.addSubscriber(sub2);

pub.setCount(10);
// sub1: Publisher is updated now
// sub2: Publisher is updated now

```

## Пример 2:

![image](https://radioprog.ru/uploads/media/articles/0001/06/eec4187142fe1f958212d5fb648c3e6cf82704cf.png)

После того как вы оформили подписку на газету или журнал, вам больше не нужно ездить в супермаркет и проверять, не вышел ли очередной номер. Вместо этого издательство будет присылать новые номера по почте прямо к вам домой сразу после их выхода.

Издательство ведёт список подписчиков и знает, кому какой журнал высылать. Вы можете в любой момент отказаться от подписки, и журнал перестанет вам приходить.
