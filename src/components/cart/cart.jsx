import React from "react";
import Button from "../button/button";
import "./cart.css";
import { totalPrice } from "../../utils/total-price";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <Button
        title={`${
          cartItems.length === 0 ? "Buyurtma berish" : "To'lov qilish"
        }`}
        disable={cartItems.length === 0 ? true : false}
        type={"checkout"}
      />
    </div>
  );
};

export default Cart;
