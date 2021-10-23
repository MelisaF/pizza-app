import React, {createContext, useState, useEffect, useContext} from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) =>{
    const [cart, setCart] = useState([]);
    const [cartProducts, setCartProducts] = useState(0);
    const [loading, setLoading] = useState(true);

    const clear = () => setCart([]);
    const remove = (id) => setCart(cart.filter(item => item.id !== id));
    const cartIn = id => cart.some(item => item.id === id);

    const addToCart = (item, quantity) => {
        if(cartIn(item.id)){
            const cartAdd = cart.map(el => {
                if(el.id === item.id) {
                    return{...el, quantity: el.quantity + quantity}
                }
                else return el;
            })
            setCart(cartAdd);
        }
        else
        {
            setCart(prev => [...prev, {...item, quantity}]);
        }
    };

    useEffect(() => {
        const storageCart = localStorage.getItem('cart');
        if (!storageCart) localStorage.setItem('cart', JSON.stringify([]));
        else setCart(JSON.parse(storageCart));
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const inCart = cart.reduce((c, item) => {
            return c + item.quantity;
        }, 0);
        setCartProducts(inCart);
    }, [cart]);


    return(
        <>
            <CartContext.Provider value={{
                cart,
                setCart,
                clear,
                addToCart,
                loading,
                cartProducts,
                remove}}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};