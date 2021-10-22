import React, {createContext, useState, useEffect, useContext} from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) =>{
    const [cart, setCart] = useState([]);
    const [productsInCart, setProductsInCart] = useState(0);
    const [providerLoading, setProviderLoading] = useState(true);

    const clearCart = () => setCart([]);

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    const isInCart = id => cart.some(item => item.id === id);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartElement => {
                if(cartElement.id === item.id){
                    return{...cartElement, quantity: cartElement.quantity + quantity}
                }else return cartElement;
            })
            setCart(newCart);
        }else{
            setCart(prev => [...prev, {...item, quantity}]);
        }
    };

    const realStock = product => {
        const foundItem = cart.find(e => e.id === product.id);
        return foundItem ? product.stock - foundItem.quantity : product.stock;
    }

    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        if (!localCart) localStorage.setItem('cart', JSON.stringify([]));
        else setCart(JSON.parse(localCart));
        setProviderLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const inCart = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        setProductsInCart(inCart);
    }, [cart]);


    return(
        <>
            <CartContext.Provider value={{
                cart,
                setCart,
                clearCart,
                addToCart,
                realStock,
                providerLoading,
                productsInCart,
                removeItem}}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};