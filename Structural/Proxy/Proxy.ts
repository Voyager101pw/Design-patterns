interface IProduct {
  name: string;
  weight: number;
}

interface ICart {
  addProduct: (product: IProduct) => void;
}

class Cart implements ICart {
  cart: IProduct[] = [];
  addProduct(product: IProduct) {
    this.cart.push(product);
    console.log(
      `${product.name} массой:${product.weight} был успешно добавлен в корзину`,
    );
  }
}

class ProxyCart implements ICart {
  constructor(private cart: ICart) {
    this.cart = cart;
  }
  addProduct(product: IProduct) {
    if (product.weight > 5) {
      console.log(`Товар больше 5кг нельзя положить в корзину!`);
    } else {
      this.cart.addProduct(product);
    }
  }
}

const cart = new Cart();
const proxyCart = new ProxyCart(cart);

proxyCart.addProduct({ name: 'Яблоки', weight: 4.95 });
// Яблоки массой: 1.5 был успешно добавлен в корзину

proxyCart.addProduct({ name: 'Бананы', weight: 5.1 });
//Товар больше 5кг нельзя положить в корзину!