import styles from './App.module.css';
import Cart from './components/Cart';
import Home from './components/Home';
import react from "react";
import Go from "./components/Go"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrdersForm from './components/Cart/Orders';
import FramedCart from './components/Cart/FramedCart';
function App() {
  return (
    <div className={styles.wrapper}>
<Router>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/orders" element={<OrdersForm/>}/>
        <Route exact path="/framed" element={<FramedCart/>}/>
      </Routes>
</Router>
     </div>
  );
}

export default App;
