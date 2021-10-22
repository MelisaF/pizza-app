import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {productos.map(producto =><Item 
            key={producto.id}
            id={producto.id} 
            name={producto.name}
            pictureUrl={producto.pictureUrl} 
            unitPrice={producto.unitPrice}/>)}
        </div>
        </>
    )
}


export default ItemList;