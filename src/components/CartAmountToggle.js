import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()} type="button" aria-label="Decrease quantity">
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()} type="button" aria-label="Increase quantity">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
