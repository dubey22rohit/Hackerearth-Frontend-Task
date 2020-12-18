import React from "react";
import { connect } from "react-redux";
import Swal from 'sweetalert2'
import { addItem, removeItem, deleteItem } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";
const CartItem = ({ addItem, removeItem, cartItem, deleteItem }) => {
  const { name, img_url, price, quantity } = cartItem;
  const deleteItemHandler = ()=>{
    deleteItem(cartItem)
    Swal.fire({
      title : `${name} has been deleted`,
      confirmButtonText: 'OK'
    })
  }
  return (
    <tr className="cart-item">
      <td className="cart-item-segment">
        <div className="item-container">
          <div className="left-section">
            <img className="item-image" src={img_url} alt="item" />
            {name}
          </div>
          <div className="right-section">
            <span className="delete-item" onClick = {()=>deleteItemHandler()}>
              &#10005;
            </span>
          </div>
        </div>
      </td>
      <td className="cart-item-segment">
        <div className="item-container">
          <span onClick={() => removeItem(cartItem)}>-</span>
          <span className="qty">{quantity}</span>
          <span onClick={() => addItem(cartItem)}>+</span>
        </div>
      </td>
      <td className="cart-item-segment">
        <div className="item-price">${price}</div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
