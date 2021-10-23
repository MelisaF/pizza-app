import {ItemList} from './ItemList';
import { firestore } from './../../Firebase/Firebase';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../estilos.css'

export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>
    {
        const db = firestore
        const coleccion = db.collection("productos")
        let consulta
        if (!id) consulta = coleccion.get()
        if (id === "1") consulta = coleccion.where("category", "==", "PIZZA").get()
        if (id === "2") consulta = coleccion.where("category", "==", "EMPANADA").get()

        consulta
            .then(res => {
                const documento = res.docs
                let productos = []

                documento.forEach(producto => {
                    const finishConsult = {
                        id: producto.id,
                        ...producto.data()
                    }
                    productos.push(finishConsult)
                })
                setProductos(productos)
            })
            .catch(err => 
                console.log(err))

        }, [id])

    if(productos.length === 0){
        return (
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
            </div>
        )       
    } 
    else{
        return(
            <div className="item-container">
                <ItemList productos={productos} />
            </div>
        )
    }    
}
