interface Door {
  getDescription: () => void;
}
class WoodDoor implements Door {
  getDescription() {
    console.log('Я деревянная дверь')
  }
}
class IronDoor implements Door {
  getDescription() {
    console.log('Я железная дверь')
  }
}


interface Master {
  getDescription: () => void;
}
class WoodMaster implements Master {
  getDescription() {
    console.log('Я мастер по установке деревянных дверей')
  }
}
class IronMaster implements Master {
  getDescription() {
    console.log('Я мастер по установке железных дверей')
  }
}


interface DoorFactory { // Абстрактная фабрика
  makeDoor: () => void;
  makeMaster: () => void;
}
// Теперь у нас есть абстрактная фабрика, которая позволит создать
// семейство связанных объектов, например:


// Фабрика деревянных дверей создаст деревянную дверь и мастера по деревянным дверям
class WoodenDoorFactory implements DoorFactory {
  makeDoor() { 
    return new WoodDoor();
  }
  makeMaster() {
    return new WoodMaster();
  }
}

//Фабрика по производству железных дверей создаст мастера по железным дверям
class IronDoorFactory implements DoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeMaster() {
    return new IronMaster();
  }
}


const woodenFactory = new WoodenDoorFactory();
const door1 = woodenFactory.makeDoor();
const master1 = woodenFactory.makeMaster();
door1.getDescription();   // Я деревянная дверь
master1.getDescription(); // Я мастер по установке деревянных дверей


const ironDoorFactory = new IronDoorFactory();
const door2 = ironDoorFactory.makeDoor();
const master2 = ironDoorFactory.makeMaster();
door2.getDescription();   // Я железная дверь
master2.getDescription(); // Я мастер по установке железных дверей
