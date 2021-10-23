import {useState} from "react"
import Button from 'react-bootstrap/Button';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [counter,setCounter] = useState(initial);
    
    const sumar = () => {
        if (counter === stock){
            return;
        }
        setCounter(counter + 1);
    }
    const restar = () => {
        if (counter === 1){
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <>
        <div>
            <div className="d-flex justify-content-center m-3 align-items-center">
                <Button onClick={restar}>-</Button> 
                <p className="m-2">{counter}</p> 
                <Button onClick={sumar}>+</Button>
            </div>    
            <Button variant="primary" onClick={()=>onAdd(counter)}>AGREGAR AL CARRITO</Button>
        </div>
        </>
    )
}
