import { Link } from "react-router-dom";
import '../../estilos.css'


export const Item = ({img, description, title, id}) => {
    return (
            <div className="card-group m-3" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={description}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/product/${id}`} className="btn btn-primary">DETALLE DEL PRODUCTO</Link>
                </div>
            </div>
    )
}