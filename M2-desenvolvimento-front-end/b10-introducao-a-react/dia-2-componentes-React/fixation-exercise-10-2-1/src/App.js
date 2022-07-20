import Order from './Order';
import './App.css';

function App() {
  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };

  return (
    <div className='App'>
      <h1>Orders recently created</h1>
      <Order order={headphone} />
      <Order order={energyDrink} />
    </div>
  );
}

export default App;

// ou dinamicamente: 
// import Order from './Order';
// import './App.css';

// function App() {
//   const orderList = [
//    {
//     id: 102,
//     user: "cena@gmail.com",
//     product: "Razer Headphone",
//     price: {
//       value: 99.99,
//       currency: "dollars"
//     }
//    },
//    {
//     id: 77,
//     user: "cena@gmail.com",
//     product: "Monster 500mL",
//     price: {
//       value: 9.99,
//       currency: "dollars"
//     }
//    },
//    {
//     id: 102,
//     user: "cena@gmail.com",
//     product: "Razer Headphone",
//     price: {
//       value: 99.99,
//       currency: "dollars"
//     }
//    },
//    {
//     id: 77,
//     user: "cena@gmail.com",
//     product: "Monster 500mL",
//     price: {
//       value: 9.99,
//       currency: "dollars"
//     }
//    }
//   ];
//   return (
//     orderList.map((item) => (
//      <div className='App'>
  //       <Order order={item};
//      </div>
//   )
//   );
// }

// export default App;