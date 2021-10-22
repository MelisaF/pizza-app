import { Link } from "react-router-dom"

const CartWidget = ({cart}) => {
    return (
        <>
        <div className="cartContainer">
            <Link to="/Cart"><img className="carrito" src="/img/carritoo.png" alt="carrito" /></Link>
            <span>{cart}</span>
        </div>
        </>
    )
}

export default CartWidget;