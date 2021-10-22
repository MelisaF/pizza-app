import { useCartContext } from '../../context/CartContext'
import { Link, useHistory  } from "react-router-dom"
import { firestore, TimeStamp } from "./../../firebase/firebase"
import { useState } from 'react'
import {Modal, Button, Container, Alert, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';

const Cart = () => {

  const {cart, clearCart, removeItem} = useCartContext();
  const listaDeTotales = [];
  const [ordenID, setOrdenID] = useState();
  const [ordenConfirmada, setOrdenConfirmada] = useState(false);
  const [traerFormulario, setTraerFormulario] = useState(false);
  const handleCancelar = () => setTraerFormulario(false);
  const handleTraer = () => setTraerFormulario(true);
  const {register, formState: { errors }, handleSubmit} = useForm();
  const history = useHistory()

  const crearOrden = (name,phone,email) => {
    
    const db = firestore

    const coleccion = db.collection("ordenes")

    const nuevaOrden = {
      buyer : {
        name : name,
        phone : phone,
        email : email
      },
      items : cart,
      date : TimeStamp.now(),
      total: listaDeTotales.reduce((previous, next) => previous + next)
    }

    const consulta = coleccion.add(nuevaOrden)

    consulta
      .then(resultado => {
        setOrdenID(resultado.id);
      })
      .catch(err=> {console.log(err)})
    }

    if(cart.length === 0){
      return(
        <div className="text-center m-5">
          <h2 className="m-5">😭 Carrito Vacío 😭</h2>
          <Link to={`/`}> <Button variant="primary fs-4 m-5">Ver Productos</Button></Link>
        </div>
      )
    }else{
    return(
      <>
        <Container>
          <h2 className="text-center">Carrito de Compras</h2>
          <hr />
        </Container>
        <div className="d-flex justify-content-around text-center ms-0 me-0">
          <div>
            <ul className="d-flex align-items-center justify-content-center p-0">
              {cart.map((producto) => {
              const total = producto.unitPrice * producto.quantity
              listaDeTotales.push(total)

              return(
              <li className="text-center list-unstyled m-2">
                <img src={producto.pictureUrl} className="fotoCart" alt="producPhoto" /> <br />
                Producto: <b>{producto.name}</b> <br />
                Precio por unidad: <b>U$S {producto.unitPrice}</b> <br />
                Unidades: <b>{producto.quantity}</b> <br />
                Total: <b>U$S {producto.unitPrice * producto.quantity}</b> <br />
                <Button type="button" variant="danger m-2" onClick={()=>removeItem(producto.id)}>x</Button>
              </li>
              )})}
            </ul>
            <Button variant="danger m-1" onClick={clearCart}>Vaciar el carro</Button>
            <hr />
            <h2>Total a pagar: U$S {listaDeTotales.reduce((previous, next) => previous + next)}</h2>
            <Button variant="success mb-4" onClick={handleTraer}>Confirmar Compra</Button>
          </div>

          <Modal show={traerFormulario} onHide={handleCancelar}>
            <Modal.Header>
              <Modal.Title className="fs-3 text-center">¡Sólo un paso más!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="mb-4">
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ej: Juan Carlos" className="form-control" {...register("name", {required: "Dato necesario para continuar" })} />
                  {errors.name && <p className="text-danger d-block">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="phone" className="form-control" placeholder="Ej: 11 0000 0000" {...register("phone", {required: "Dato necesario para continuar" })} />
                  {errors.phone && <p className="text-danger d-block">{errors.phone.message}</p>}
                </div>
                <div className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className="form-control" placeholder="Ej: juancarlos@gmail.com" aria-describedby="emailHelp" {...register("email", {required: "Dato necesario para continuar" })} />
                  {errors.email && <p className="text-danger d-block">{errors.email.message}</p>}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleCancelar}>Cancelar</Button>
              <Button variant="success" onClick={handleSubmit((data, e)=> {
                handleCancelar()
                crearOrden(data.name, data.phone, data.email)
                setOrdenConfirmada(true)
                })}>Finalizar Compra
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={ordenConfirmada} onHide={()=> setOrdenConfirmada(false)}>
            <Modal.Header closeButton onClick={()=> {
              clearCart()
              history.push("/")}}>
              <Alert variant="success" className="text-center d-flex justify-content-center">¡Compra exitosa!</Alert>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center"><b>N° de Orden:</b> {ordenID}</p> <br />
              {cart.map((cart) => {
              return (
              <ul>
                <li><b>Producto:</b> {cart.name}</li>
                <li><b>Precio por unidad:</b> U$S {cart.unitPrice}</li>
                <li><b>Cantidad:</b> {cart.quantity}</li>
                <li><b>Total abonado:</b> U$S {listaDeTotales.reduce((previous, next) => previous + next)}</li>
              </ul>
              )})}
            </Modal.Body>
          </Modal>
        </div>
      </>
      )
  }
}

export default Cart;