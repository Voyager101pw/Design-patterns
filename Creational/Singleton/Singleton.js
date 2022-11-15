// Рандомное число при инициализации
(() => {
  class Singleton {
    constructor() {
      // Конструктор Одиночки всегда должен быть скрытым, чтобы предотвратить
      // создание объекта через оператор new.
      this.count = Math.random();
    }
    static get Instance() {
      return Singleton._instance || (Singleton._instance = new this());
    }
  }
  const a = Singleton.Instance;
  const b = Singleton.Instance;
  console.log(a.count === b.count); // true
})();

// Изменение счетчика
(() => {
  class Singleton {
    constructor() {
      this._count = 0;
    }
    static get Instance() {
      if (Singleton._instance) return Singleton._instance;
      Singleton._instance = new this();
      return Singleton._instance;
    }
    get count() {
      return this._count;
    }
    set count(number) {
      this._count = number;
    }
  }

  const a = Singleton.Instance;
  const b = Singleton.Instance;
  
  a.count = 100; // a: 100
  b.count = 200; // a: 200, b: 200
  console.log(a.count === b.count); // true
})();
