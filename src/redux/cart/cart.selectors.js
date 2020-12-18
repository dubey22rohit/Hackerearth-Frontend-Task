import { createSelector } from "reselect";
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQty, cartItem) => {
      return accumulatedQty + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) =>
      accumulatedQty + cartItem.quantity * cartItem.price,
    0
  )
);
export const selectCartDiscount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) =>
        accumulatedQty +
        (cartItem.quantity * cartItem.price * cartItem.discount) / 100,
      0
    )
);
export const selectTypeDiscount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) =>
    {
      return cartItem.type === 'fiction'
        ? accumulatedQty + (cartItem.quantity * cartItem.price * 10/100)
        : 0},
      0
    )
);
export const selectCartFinalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => {
        return (
          accumulatedQty +
          cartItem.quantity * cartItem.price -
          (cartItem.quantity * cartItem.price * cartItem.discount) / 100
        );
      },

      0
    )
);
