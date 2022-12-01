class Flyweight {
  /* 
    Внутреннее(общее) состояние хранится внутри приспособленца, 
    не зависит от контекста и неизменяемо.  
  */
  constructor(private sharedState: any) {
    this.sharedState = sharedState; // Общее состояние определяется только при создании.
    // или this.internalState
    // после этого, его нельзя будет изменить.
  }

  /*
    Внешнее состояние зависит от контекста, является изменчивым,
    хранится или вычисляется за пределами приспособленца 
    и передается приспособленцу при вызове его методов.
  */
  operation(
    externalState: any, // Внешне состояние передается приспособленцу при вызове его методов
  ) {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(externalState);
    console.log(`Flyweight: внутрннее состояние: ${s} и внешнее состояние: ${u}`);
  }
}

/*
  Для работы с множеством легковесов обычно используют фабрику.
  Фабрика легковесов будет управлять ими и решать: создать новый
  экземпляр или возвратить существующий.
*/

type flyweights = {
  [nameFlyweight: string]: Flyweight;
};

class FlyweightFactory {
  private flyweights: flyweights = {};

  getFlyweight(name: string, state: any) {
    if (!this.flyweights[name]) {
      console.log(`Легковес ${name} был создан`);
      this.flyweights[name] = new Flyweight(state);
    }
    return this.flyweights[name];
  }
}

const flyweightFactory = new FlyweightFactory();
const flyweighy1 = flyweightFactory.getFlyweight('flyweight1', 1);
// Легковес flyweight1 был создан

const flyweighy2 = flyweightFactory.getFlyweight('flyweight1', [1, 2, 3]);


const flyweighy3 = flyweightFactory.getFlyweight('flyweight3', [true, false]);
// Легковес flyweight3 был создан

flyweighy1.operation([1]); // Flyweight: внутрннее состояние: 1 и внешнее состояние: [1] 
flyweighy2.operation([2]); // Flyweight: внутрннее состояние: 1 и внешнее состояние: [2]
flyweighy3.operation([3]); // Flyweight: внутрннее состояние: [true,false] и внешнее состояние: [3]

flyweighy1 === flyweighy2 // true