import React from "react";
import CartItem from "../cart-item/cart-item.component";
import "./cart-items.styles.scss";

const CartItems = ({ cartItems }) => {
  return (
    <tbody className="cart-items">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </tbody>
  );
};

export default CartItems;
