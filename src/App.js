import styles from './App.module.css';
import Cart from './components/Cart';
import Home from './components/Home';
import react from "react";
import Go from "./components/Go"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className={styles.wrapper}>
<Router>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/go" element={<Go/>}/>
      </Routes>
</Router>
     </div>
  );
}

export default App;
