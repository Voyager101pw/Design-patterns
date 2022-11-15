class Singleton {
  private static instance: Singleton;
  // Конструктор Одиночки всегда должен быть скрытым, чтобы предотвратить
  // создание объекта через оператор new. 
  private constructor() {}

  static getInstance() {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {}
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b);