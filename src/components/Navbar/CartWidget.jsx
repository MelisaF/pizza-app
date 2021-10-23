import { Link } from "react-router-dom";
import {GiShoppingCart} from 'react-icons/gi';
import '../../estilos.css'

export const CartWidget = ({cart}) => {
    return (
        <div className="cart-icon">
            <Link to="/cart"><GiShoppingCart className="icon-color"/></Link>
            <span>{cart}</span>
        </div>
    )
}