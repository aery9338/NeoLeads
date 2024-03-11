import React, { type JSX } from "react";
import PaymentTable from "../payment-table";

export default function PaymentActivity(): JSX.Element {
  return (
    <div className="w-full bg-userbg min-h-screen h-fit p-8">
      <h1 className="text-3xl mb-6 sm:mb-3">Payment Activity</h1>
      <div className="my-9 lg:my-11 px-32">
        <PaymentTable />
      </div>
    </div>
  );
}
