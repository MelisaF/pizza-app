import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { Navbar } from '../Navbar/Navbar';
import {Cart} from '../Cart/Cart';
import { CartProvider } from "../../Context/CartContext";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";


export const AppRoutes = () => {
    return (
            <BrowserRouter>
            <CartProvider>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/nuestrosProductos" exact component={ItemListContainer} />
                    <Route path="/category/:id" component={ItemListContainer}/>
                    <Route path="/product/:id" exact component={ItemDetailContainer}/>
                    <Route path="/cart" exact component={Cart} />
                </Switch>
                <Footer/>
            </CartProvider>
        </BrowserRouter>
    )
}
