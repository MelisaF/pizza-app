import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "./ItemDetail";
import { firestore } from "../../Firebase/Firebase"

export const ItemDetailContainer = () => {
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
                setProductos(data.find(res => res.id == id))                
            })
            .catch(err => 
                console.log(err))

        },[id]); 
        
        if(productos.length === 0){
        return (
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
            </div>
        )}
        else{
            return(
            <div>
                <ItemDetail producto={productos}/>
            </div>
            )
        } 
}                
























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