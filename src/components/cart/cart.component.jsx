import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import CartItems from "../cart-items/cart-items.component";
import "./cart.styles.scss";

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="cart-page">
        <h1 className="page-heading">&#10748; &nbsp; Order Summary</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Items({this.props.itemCount})</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          {this.props.itemCount === 0 ? (
            <button
              style={{ background: "black", width: "100px", height: "100px" }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
                href="/"
                onClick={() => localStorage.clear()}
              >
                Return To Original State
              </a>
            </button>
          ) : (
            <CartItems cartItems={cartItems} />
          )}
        </table>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(Cart);
