import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase/firebase"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        const db = firestore
        const coleccion = db.collection("productos")
        coleccion
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // eslint-disable-next-line eqeqeq
                setProductos(data.find(res => res.id == id))                
            })
            .catch(err => console.log(err))
        },[id]); 
        
        if(productos.length === 0){
        return (
            <div className="text-center m-5">
                <div className="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )       
        }else{
            return(
            <div>
                <ItemDetail producto={productos}/>
            </div>
            )
        } 
    }                
export default ItemDetailContainer























/* import { useEffect,useState } from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail"



const ItemDetailContainer = () => {

    const [items,setItems] = useState([])

    useEffect( ()=> {

        const getItem = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(itemInicial)
            },2000)
        })
        getItem
            .then((res)=>{
                setItems(res)
            })
        
    })    

    if(items.length > 0){
        return (
            <>
            <div className="d-flex justify-content-center container mt-3 mb-3">
                {items.map((item,i)=>{
                    return <ItemDetail item={item}/>
                })}
            </div>
            </>
        );
    }else {
        return (
            <>
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>    
            </>
        )
    }
  
}
    export default ItemDetailContainer */