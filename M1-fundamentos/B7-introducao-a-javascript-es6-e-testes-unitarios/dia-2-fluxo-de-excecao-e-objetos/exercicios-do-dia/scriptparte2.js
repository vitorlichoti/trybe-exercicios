const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// console.log(order.phoneNumber);

const entries = Object.entries(order);
const adressIndex = entries[2][1];
const adressValue = Object.values(adressIndex);

const orderS = entries[3][1];
const delivery = Object.entries(orderS);
const deliveryP = delivery[2][1];
const deliveryValue = Object.values(deliveryP);

const customerInfo = (order) => {
  // pegando os indices com Object.keys:
  
  return `Olá ${deliveryValue[0]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${adressValue[0]}, ${adressValue[1]}, AP: ${adressValue[2]}`;

}

customerInfo(order);

console.log(customerInfo(order));


function orderModifier(order) {
  const newClient = order.name = 'Luiz Silva';
  const newTotal = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price;
  return `"Olá ${newClient}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${newTotal},00."`
}

orderModifier(order);

console.log(orderModifier(order));