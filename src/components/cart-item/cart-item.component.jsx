import React from "react";

// import "./cart-item.styles.scss";

import {
  CartItemContainer,
  ItemDetailsContainer,
  Img,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
