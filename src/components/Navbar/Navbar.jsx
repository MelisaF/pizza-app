import {CartWidget} from "./CartWidget";
import { Link} from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";


export const Navbar = () => {

    const {cart} = useCartContext();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PIZZA APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to={"/nuestrosProductos"}>NUESTROS PRODUCTOS</Link>
                            <Link className="nav-link" to={"/category/1"}>PIZZAS</Link>
                            <Link className="nav-link" to={"/category/2"}>EMPANADAS</Link>
                        </div>
                    </div>
                    <CartWidget/>
                    <span className="colorNumber">{cart.reduce((c, {quantity}) => c + quantity, 0)}</span>
                </div>
            </nav>
        </div>
    )   
}

