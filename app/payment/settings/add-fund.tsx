import React, { useState, type JSX, type Dispatch, type SetStateAction } from "react";

interface AddFundProps {
  addFund: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function AddFund({ addFund, onClose }: AddFundProps): JSX.Element {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [addPaymentMethod, setAddPaymentMethod] = useState("");

  function handleSubmit(): void {}

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClose}
      onKeyDown={() => onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors${
        addFund ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        className={`bg-white rounded-xl shadow px-14 py-7 transition-all ${
          addFund ? "scale-100 opacity-100" : "scale-125 opacity-0"
        } w-5/6  sm:w-2/3 lg:w-2/5`}
      >
        <h1 className="text-center font-medium text-2xl mb-5">Add Funds</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">
            <span className="text-xl font-medium">Amount to add</span>
            <input
              type="text"
              id="amount"
              className="auth-input h-8 lg:h-10 mb-3 mt-[6px]"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </label>

          <label htmlFor="select-payment-method">
            <span className="text-xl font-medium">Select Payment Method</span>
            <div>
              {["Visa .192", "Paytm ****98", "Visa .786"].map((item) => (
                <div
                  role="button"
                  tabIndex={0}
                  className="py-1 text-lg hover:cursor-pointer"
                  onClick={() => {
                    setPaymentMethod(item);
                  }}
                  onKeyDown={() => {
                    setPaymentMethod(item);
                  }}
                >
                  <input
                    type="radio"
                    id={`payment-${item}`}
                    className="hover:cursor-pointer mr-1"
                    value={paymentMethod}
                    name="payment"
                    checked={paymentMethod === item}
                  />
                  <label htmlFor={`payment-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          </label>

          <label htmlFor="add-payment-method">
            <span className="text-xl font-medium">Add Payment Method</span>
            <div>
              {["Debit Card", "UPI", "Net Banking"].map((item) => (
                <div
                  role="button"
                  tabIndex={0}
                  className="py-1 text-lg hover:cursor-pointer"
                  onClick={() => {
                    setAddPaymentMethod(item);
                  }}
                  onKeyDown={() => {
                    setAddPaymentMethod(item);
                  }}
                >
                  <input
                    type="radio"
                    id={`addpayment-${item}`}
                    className="hover:cursor-pointer mr-1"
                    value={addPaymentMethod}
                    name="addpayment"
                    checked={addPaymentMethod === item}
                  />
                  <label htmlFor={`addpayment-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          </label>

          <div className="flex justify-around sm:justify-end mt-6">
            <button className="primarybtn w-2/6 sm:w-1/6 h-8 lg:h-10" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
