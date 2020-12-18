import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartTotal,
  selectCartDiscount,
  selectCartFinalPrice,
  selectTypeDiscount,
} from "../../redux/cart/cart.selectors";
import "./order-total.styles.scss";

const OrderTotal = ({
  itemCount,
  cartTotal,
  discount,
  finalPrice,
  typeDiscount,
}) => (
  <div className="order-total">
    <span style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 20px" }}>
      Total
    </span>
    <div className="order-items">
      Items({itemCount})&nbsp;:${cartTotal}{" "}
    </div>
    <div className="order-discount">
      Discount&nbsp;:-${discount}
    </div>
    <div className="type-discount">Type Discount : -${typeDiscount}</div>

    <div className="total">Order Total:${finalPrice - typeDiscount}</div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartTotal: selectCartTotal,
  typeDiscount: selectTypeDiscount,
  discount: selectCartDiscount,
  finalPrice: selectCartFinalPrice,
});
export default connect(mapStateToProps)(OrderTotal);
