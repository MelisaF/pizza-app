import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Item = ({description,name,unitPrice,id,pictureUrl}) => {
    return (
        <>
            <div className="card m-2">
                <Link to={`/product/${id}`}><img src={pictureUrl} className="card-img-top" alt="product"/></Link>
                <div className="card-body text-uppercase">
                    <Link to={`/product/${id}`} className="ah5"><h5 className="card-title"><b>{name}</b></h5></Link>
                    <p className="card-text">{description} U$S {unitPrice}</p>
                    <Link to={`/product/${id}`}><Button variant="btn btn-primary">Ver Detalle</Button></Link>
                </div>
            </div> 
        </>
    )
}
export default Item;