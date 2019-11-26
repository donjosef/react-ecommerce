import React from 'react';

const CartContext = React.createContext();

const CartProvider = props => {
    const [cart, setCart] = React.useState([]);

    const handleAddProduct = (watch) => {
        const product = cart.find(product => product.name === watch.name);
        if (!product) {
            const newCart = cart.concat({ ...watch, quantity: 1 })
            setCart(newCart);
        } else {
            const updatedCart = cart.map(product => {
                return product.name === watch.name
                    ? {
                        ...product,
                        quantity: product.quantity + 1
                    }
                    : product
            });

            setCart(updatedCart)
        }
    }

    const handleChangeQuantity = (e, watch) => {
        const target = e.target; //prevent nullifying of e object. The alternative will be to use e.persist()
        const updatedCart = cart.map(prod => (
            prod.name === watch.name ? {...prod, quantity: parseInt(target.value, 10)} : prod
        ));

        setCart(updatedCart);
    }

    const handleDeleteProduct = (name) => {
        const filteredCart = cart.filter(prod => prod.name !== name );
        setCart(filteredCart);
    }

    const handleOrderProduct = () => {
        alert('Congratulations! Your order has been placed!');
        setCart([])
    } 

    return (
        <CartContext.Provider value={{
            cart,
            addProductToCart: handleAddProduct,
            onDeleteProduct: handleDeleteProduct,
            onChangeQuantity: handleChangeQuantity,
            onOrderProduct: handleOrderProduct
        }} {...props} />
    )
}

const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error(`useCart must be used within a CartProvider`)
      }
      return context
}

export {CartProvider, useCart}