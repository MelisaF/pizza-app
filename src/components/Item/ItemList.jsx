import {Item} from "./Item"

export const ItemList = ({productos}) => {
    return (
        <>
        <div className="container-card">
                {productos.map(producto =>
                <Item 
                    key={producto.id}
                    id={producto.id} 
                    title={producto.title}
                    img={producto.img} 
                    price={producto.price}
                />
            )}
        </div>
        </>
    )
}

