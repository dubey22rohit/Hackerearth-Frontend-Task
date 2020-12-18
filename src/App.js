import './App.css';

import Cart from './components/cart/cart.component'
import OrderTotal from './components/order-total/order-total.component'
function App() {
  return (
    <div className = "home">
      <div className="wrapper">
      <Cart/>
      <OrderTotal/>
      </div>
    </div>
  );
}

export default App;
