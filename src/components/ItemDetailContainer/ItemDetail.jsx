import {ItemCount} from "./ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from './../../Context/CartContext';
import '../../estilos.css'


export const ItemDetail = ({producto}) => {
    const {addToCart} = useCartContext();
    const onAdd = (quantity) => {addToCart(producto, quantity)}

    return (
        <div className="container">
            <div>
                <h1 className="fw-light my-4">{producto.category}</h1>
            </div>
            <div>
                <div className="container-center">
                    <p className="fst-italic fs-3"> {producto.title}</p>
                    <img src={producto.img} alt={producto.title}/>
                </div>
                <div className="container-center">
                    <p  className="fs-1 fw-bolder">${producto.price}</p>
                </div>
            </div>
            <div className="container-center">
                <ItemCount  initial={1} onAdd={onAdd}/>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
                <Link className="btn btn-dark mt-3" to={"/nuestrosProductos"}>VER MAS</Link>
                <Link className="btn btn-secondary mt-3" to={"/cart"}>COMPRAR</Link>
            </div>
        </div>
    )
}
