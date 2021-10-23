import {Link} from 'react-router-dom';
import '../../estilos.css'

export const Home = () => {
    return (
        <div>
            <img src="img/pizza-home.png" className="img-fluid" alt="pizza-home"/>
            <h1 className="home-center">PIZZA APP</h1>
            <div className="containerHome">
                <div className="card" style={{width: "25rem"}}>
                    <Link to={"/category/1"}> <img src="/img/pizzaAlbahaca.jpg" className="card-img-top" alt="pizzas"/></Link>
                    <div className="card-body">
                        <p className="card-text">PIZZAS AL MOLDE O A LA PIEDRA, HORNO A LEÑA.</p>
                    </div>
                    </div>
                    <div className="card" style={{width: "25rem"}}>
                    <Link to={"/category/2"}><img src="img/empanada-semillas.jpg" className="card-img-top" alt="empanadas"/></Link>
                    <div className="card-body">
                        <p className="card-text">GRAN VARIEDAD DE SABORES. AL HORNO O FRITAS.</p>
                    </div>
                </div>
            </div>
            <div className="home-center">
                <Link className="btn btn-primary link-home" to="/nuestrosProductos">MIRA TODOS NUESTROS PRODUCTOS</Link>
            </div>
        </div>
    )
}