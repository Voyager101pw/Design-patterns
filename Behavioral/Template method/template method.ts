/*
 * Абстрактный Класс определяет шаблонный метод, содержащий скелет
 * некоторого алгоритма, состоящего из вызовов (обычно) абстрактных примитивных
 * операций.
*/
abstract class Day { 
  startDay() { 
    // Шаблонный метод определяет скелет алгоритма
    this.morning();
    this.afternoon();
    this.evening();
    this.hook();
    this.night();    
  }
  
  // Эта операция уже имеет реализацию.
  morning() { 
    console.log('Утром я просыпаюсь');
  }
  
  // А эти операции должны быть реализованы в подклассах.
  protected abstract afternoon(): void;
  protected abstract evening(): void;

/* 
 * Подклассы могут переопределять хуки, но это не обязательно,
 * поскольку у хуков уже есть стандартная (пустая) реализация. Хуки
 * предоставляют дополнительные точки расширения в некоторых критических
 * местах алгоритма.
*/
  protected abstract hook(): void;
  
  // Эта операция уже имеет реализацию.
  night() {
    console.log('Ночью я ложусь спать');
  }
}

class GeniusDay extends Day {
  afternoon(): void {
    console.log('Днем я учусь');
  }

  evening(): void {
    console.log('Вечером я тоже учусь');
  }

  hook(): void { // Расширяем поведение
    console.log('Подвожу итоги дня');
  }
}

class DumbManDay extends Day {
  afternoon(): void {
    console.log('Днем я сижу в соц.сетях');
  }

  evening(): void {
    console.log('Вечером я играю');
  }

  hook(): void {}
}

new GeniusDay().startDay();
// Утром я просыпаюсь            (base)
// Днем я учусь             (implementation)
// Вечером я тоже учусь     (implementation)
// Подвожу итоги дня             (hook)
// Ночью я ложусь спать          (base)

new DumbManDay().startDay();
// Утром я просыпаюсь            (base)
// Днем я сижу в соц.сетях  (implementation)
// Вечером я играю          (implementation)
// Ночью я ложусь спать          (base)