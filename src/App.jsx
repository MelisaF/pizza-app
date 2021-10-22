import "../src/App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import {CartProvider} from "./context/CartContext";


const App = () => {

    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/category/:id" component={ItemListContainer}/>
                    <Route path="/product/:id" component={ItemDetailContainer} exact/>
                    <Route path="/Cart" component={Cart} exact/>
                </Switch>

                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}
export default App;