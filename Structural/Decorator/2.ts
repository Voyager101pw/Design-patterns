interface Greeting {
  username: string;
  greet: () => string;
}

class BaseGreeting implements Greeting {
  constructor(public username: string) {
    this.username = username;
  }

  greet() {
    return `Hello ${this.username}`;
  }
}

interface GreetingDecorator {
  decorated: Greeting; // это объект, функциональность которого мы будем расширять:
  greet: () => string;
}

class GreetingWithUpperCase implements GreetingDecorator {
  constructor(public decorated: Greeting) {
    this.decorated = decorated;
  }

  greet() {
    // Используем базовое поведение:
    const baseGreeting = this.decorated.greet();
    
    // Расширяем его:
    return baseGreeting.toUpperCase();
  }
}


const greeting = new BaseGreeting('John');
greeting.greet() // Hello John

const decoratedGreeting = new GreetingWithUpperCase(greeting);
decoratedGreeting.greet() // HELLO JOHN