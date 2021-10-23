import { useCartContext } from '../../Context/CartContext'
import { Link, useHistory  } from "react-router-dom"
import { firestore, TimeStamp } from "./../../Firebase/Firebase"
import { useState } from 'react'
import {Modal, Button, Alert, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import '../../estilos.css';

export const Cart = () => {

  const {cart, clear, remove} = useCartContext();
  const totalList = [];
  const [idOrder, setIdOrder] = useState();
  const [confirmOrder, setconfirmOrder] = useState(false);
  const [getForm, setgetForm] = useState(false);
  const cancel = () => setgetForm(false);
  const get = () => setgetForm(true);
  const {register, formState: { errors }, handleSubmit} = useForm();
  const history = useHistory()

  const createOrder = (nombre, apellido, telefono, email) => {
    
    const db = firestore

    const coleccion = db.collection("orders")

    const newOrder = {
      buyer : {
        nombre : nombre,
        apellido : apellido,
        telefono: telefono,
        email : email
      },
      items : cart,
      date : TimeStamp.now(),
      total: totalList.reduce((previous, next) => previous + next)
    }

    const consulta = coleccion.add(newOrder)

    consulta
      .then(resultado => {
        setIdOrder(resultado.id);
      })
      .catch(err=> {console.log(err)})
    }

    if(cart.length === 0) {
      return(
        <div className="text-center m-5">
          <h2 className="m-5">CARRITO VACIO</h2>
          <Link to={`/nuestrosProductos`}> <Button variant="primary fs-4 m-5">VER PRODUCTOS</Button></Link>
        </div>
      )
    }
    else{
      return(
      <>
        <h2 className="text-center">DETALLE DEL CARRITO</h2>
          <div className="d-flex align-items-center justify-content-center p-0 tableCard">
                <table class="table table-hover tableCard">
                <thead>
                  <tr>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRECIO U.</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">ELIMINAR</th>
                  </tr>
                </thead>
                {cart.map((producto) => {
                    const total = producto.price * producto.quantity
                    totalList.push(total)
                    return (
                      <>
                <tbody>
                  <tr class="table-primary">
                    <th scope="row">{producto.quantity}</th>
                    <td>{producto.title}</td>
                    <td>{producto.price}</td>
                    <td>$ {producto.price * producto.quantity} </td>
                    <td onClick={()=> remove(producto.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                    </td>
                  </tr>
                  </tbody>
                  </>
              )})}
            </table>
          </div>
            <div className="displayCard">
              <h3>TOTAL A PAGAR: $ {totalList.reduce((previous, next) => previous + next)}</h3>
              <Button className="mt-3" onClick={get}>CONFIRMAR</Button><br/>
              <Link to={"/nuestrosProductos"} className="btn btn-primary">VER MAS PRODUCTOS</Link>
              </div>
          <Modal show={getForm} onHide={cancel}>
            <Modal.Header>
              <Modal.Title className="completarForm">COMPLETA EL FORMULARIO Y TE ENVIAREMOS LA ORDEN DE COMPRA.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="form-container">
                        <label htmlFor="nombre">NOMBRE(*)</label> 
                        <input type="text" id="nombre" {...register("nombre", {required: "*Campo Obligatorio"})} />
                        {errors.nombre && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
                        <label htmlFor="apellido">APELLIDO(*)</label> 
                        <input type="text" id="apellido" {...register("apellido", {required: "*Campo Obligatorio"})} />
                        {errors.apellido && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
                        <label htmlFor="telefono">TELEFONO(*)</label> 
                        <input type="phone" id="telefono"{...register("telefono", {required: "*Campo Obligatorio"})} />
                        {errors.telefono && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
                        <label htmlFor="email">EMAIL(*)</label> 
                        <input type="email" id="email" {...register("email", {required: "*Campo Obligatorio"})} />
                        {errors.email && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
                        <h6 className="camposRequeridos">(*) CAMPOS REQUERIDOS</h6>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={cancel}>CANCELAR</Button>
              <Button onClick={handleSubmit((data, e)=> {
                e.preventDefault()
                cancel()
                createOrder(data.nombre, data.apellido, data.telefono, data.email)
                setconfirmOrder(true)
                })}>FINALIZAR COMPRA
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={confirmOrder} onHide={()=> setconfirmOrder(false)}>
            <Modal.Header closeButton onClick={()=> {
              clear()
              history.push("/")}}>
              <Alert className="alert alert-dismissible alert-primary alertCompra">COMPRA REALIZADA CON EXITO.</Alert>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center"><b>ORDEN N°:</b> {idOrder}</p> <br />
              {cart.map((cart) => {
              return (
              <ul>
                <li>PRODUCTO: {cart.title}</li>
                <li>PRECIO U.: $ {cart.price}</li>
                <li>CANTIDAD: {cart.quantity}</li>
                <li>TOTAL:$ {totalList.reduce((previous, next) => previous + next)}</li>
              </ul>
              )})}
            </Modal.Body>
          </Modal>
    
      </>
      )
  }
}