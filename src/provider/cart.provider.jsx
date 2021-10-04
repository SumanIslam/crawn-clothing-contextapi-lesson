import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterCartItems,
  getTotalAmount,
  getCartItemsCount
 } from './cart.utils';

export const CartContext = createContext({
  cartItems: [],
  hidden: true,
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  toggleHidden: () => {},
  total: 0,
  cartItemsCount: 0,
});


const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item => setCartItems(filterCartItems(cartItems, item));

  useEffect(() => {
    setTotal(getTotalAmount(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems])
  return (
    <CartContext.Provider value={{cartItems, hidden, toggleHidden, addItem, removeItem, clearItemFromCart, total, cartItemsCount}}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;