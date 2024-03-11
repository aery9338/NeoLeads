"use client";

import React, { useState, type JSX } from "react";
import PaymentTable from "../payment-table";
import AddFund from "./add-fund";

export default function PaymentSettings(): JSX.Element {
  const [addFund, setAddFund] = useState(false);

  return (
    <div className="w-full min-h-screen h-fit">
      <h1 className="text-3xl mb-6 sm:mb-3 p-8">Payment Settings</h1>

      <div className="flex flex-col items-center py-2">
        <div className="w-5/6 xl:w-3/4 flex flex-col gap-11">
          <div className="flex gap-20 companies-card">
            <div className="w-2/3">
              <div className="mb-8">
                <h6 className="font-semibold text-lg">Current Balance</h6>
                <h1 className="text-4xl font-medium my-2 sm:mb-0">Rs. 0.00</h1>
                <h1 className="companies-h6">No payments due at this time</h1>
              </div>
              <div>
                <h6 className="font-semibold text-lg my-3">VISA .1296</h6>
                <h1 className="text-xl font-medium">When you will pay</h1>
                <div className="bg-gray-100 p-6 flex justify-between my-3">
                  <span>15000Rs</span>
                  <span>ON</span>
                  <span>15 Dec 2023</span>
                </div>
                <h1 className="companies-h6">
                  Daily Spending Limit: <span className="text-black">Rs. 14000</span>
                </h1>
              </div>
            </div>
            <button
              className="bg-gray-50 text-black w-1/6 h-9 rounded-md"
              onClick={() => {
                setAddFund(true);
              }}
              type="button"
            >
              Add Funds
            </button>
          </div>

          <div className="flex gap-20 companies-card">
            <div className="w-2/3">
              <h6 className="font-semibold text-lg">Payment Methods</h6>
              <h6 className="font-semibold text-lg my-2">VISA .1296</h6>
            </div>
            <button className="bg-gray-50 text-black w-1/4 h-9 rounded-md" type="button">
              Add Payment Method
            </button>
          </div>

          <div className="companies-card">
            <h6 className="font-medium text-2xl mt-3 mb-10">Payment Activity</h6>
            <div className="px-6">
              <PaymentTable />
            </div>
          </div>
        </div>
      </div>
      <AddFund
        addFund={addFund}
        onClose={() => {
          setAddFund(false);
        }}
      />
    </div>
  );
}
